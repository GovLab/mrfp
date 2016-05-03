$(document).ready(function() {

  var currentTime,currentEvents,latestEventDate,date, dateInMs, latestEventDateMs;

// CREATE TIMELINE EVENT OBJECTS THAT HOLD INDEX RELATIVE TO PARENT
  function TimelineEvent (timeElement,elementIndex) {
    this.timeElement = timeElement;
    this.elementIndex = elementIndex;
  }


  // FIND THE LATEST EVENT AND RETURN THE FIRST MATCH
  function getCurrentEvent() {
    currentTime = Date.now();
    // currentTime = new Date("April 1, 2016").getTime();
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

// UPDATE TIMELINE GRAPHIC USING TIMELINE EVENT INDEX
  function updateTimelineGraphic(currentEvent) {
    $('.e-timeline-graphic').children().eq(currentEvent.elementIndex).addClass("m-current");
  }

// UPDATE TIMELINE SECTION IN LIST AND COLUMN VIEW
  function updateTimelineSections(currentEvent) {
    latestEventDate = $(currentEvent.timeElement).attr('datetime');
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
