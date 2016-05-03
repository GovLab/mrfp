$(document).ready(function() {

  var currentTime,currentEvents,latestEventDate,date, dateInMs, latestEventDateMs;
// var currentTime = new Date("April 1, 2016").getTime();

  function TimelineEvent (timeElement,elementIndex) {
    this.timeElement = timeElement,
    this.elementIndex = elementIndex
  }

  function getCurrentEvent() {
    // currentTime = Date.now();
    currentTime = new Date("March 16, 2016").getTime();
    currentEvents = [];
    $(".e-event time").map(function(idx,val){
      date = ($(this).attr('datetime'));
      dateInMs = new Date(date).getTime();
      if (dateInMs > currentTime) {
        currentEvents.push(new TimelineEvent(this,idx));
      }
    });
    return currentEvents[0];
  }


  function updateTimelineGraphic(event) {
    $('.e-timeline-graphic').children().eq(event.elementIndex).addClass("m-current");
  }

  function updateTimelineSections(event) {
    latestEventDate = $(event.timeElement).attr('datetime');
    $(".e-event time").map(function(idx,val){
      date = ($(this).attr('datetime'));
      dateInMs = new Date(date).getTime();
      latestEventDateMs = new Date(latestEventDate).getTime();
      if (dateInMs == latestEventDateMs) {
        $(this).parent().addClass("m-current");
      }
    });
  }

  updateTimelineGraphic(getCurrentEvent());
  updateTimelineSections(getCurrentEvent());

});
