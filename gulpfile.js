var
gulp            = require('gulp'),
sass            = require('gulp-sass'),
shell           = require('gulp-shell'),
data            = require('gulp-data'),
nunjucksRender  = require('gulp-nunjucks-render'),
browserSync     = require('browser-sync').create(),
file            = require('gulp-file'),
plumber         = require('gulp-plumber'),
packagejson     = require('./package.json');

gulp.task('browserSync', function() {
  browserSync.init({
    server: 'public',
    open: false
  });
})

gulp.task('sass', function() {
  return gulp.src('source/sass/styles.scss')  // sass entry point
  .pipe(plumber())
  .pipe(sass())
  .pipe(gulp.dest('public/css'))
  .pipe(browserSync.stream());
});

gulp.task('img', function() {
  return gulp.src('source/img/**/*')
  .pipe(plumber())
  .pipe(gulp.dest('public/img'))
  .pipe(browserSync.stream());
});

gulp.task('files', function() {
  return gulp.src('source/files/**/*')
  .pipe(plumber())
  .pipe(gulp.dest('public/files'))
  .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src(['node_modules/govlab-styleguide/js/**/*', 'source/js/**/*'])
  .pipe(plumber())
  .pipe(gulp.dest('public/js'))
  .pipe(browserSync.stream());
});

// Nunjucks
gulp.task('nunjucks', function() {

  var options = {
    path: 'source/templates',
    ext: '.html'
  };
  return gulp.src('source/templates/**/*.+(html|nunjucks)')
  .pipe(plumber())
  // Adding data to Nunjucks
  .pipe(data(function() {
    return require('./source/data/data.json')
  }))
  .pipe(nunjucksRender(options))
  .pipe(gulp.dest('public'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('favicon', function() {
  return gulp.src('source/templates/favicon*')
  .pipe(plumber())
  .pipe(gulp.dest('public'))
  .pipe(browserSync.stream());
});

gulp.task('deploy', ['sass', 'nunjucks', 'js', 'img'], shell.task([
  'git subtree push --prefix public origin gh-pages'
  ])
);

gulp.task('default', ['browserSync', 'sass', 'nunjucks', 'js', 'img', 'files', 'favicon'], function (){
  // browserSync.pause();
  gulp.watch('source/sass/**/*.scss', ['sass']);
  gulp.watch('source/templates/**/*.html', ['nunjucks']);
  gulp.watch('source/img/**/*', ['img']);
  gulp.watch('source/js/**/*', ['js']);
  gulp.watch('source/files/**/*', ['files']);
  gulp.watch('source/templates/favicon*', ['favicon']);
});