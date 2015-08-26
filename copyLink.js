$(document).ready(function(){
  setTimeout(linkStoryItems, 10000);

  function linkStoryItems(){
    $('.items').on('click', '.story', function(e){
      var storyId   = $(this).data('id');
      var storyName = $(this).find('.story_name').text();
      var mdText    = '';

      if (e.shiftKey) {
        mdText = "[" + storyId + "](" + storyName + ")";
        prompt(mdText);
      }

      if (e.altKey) {
        mdText = "[" + storyName + "](" + storyId + ")";
        prompt(mdText);
      }
    });

    console.log('pivotal - copyLink.js loaded!')
  };
});
