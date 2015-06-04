$(document).ready(function(){
  setTimeout(linkStoryItems, 3000);

  function linkStoryItems(){
    $('.items').on('click', '.story', function(e){
      if (e.shiftKey) {
        var storyId   = $(this).data('id');
        var storyLink = 'https://www.pivotaltracker.com/story/show/'+storyId;
        var storyName = $(this).find('.story_name').text();
        var mdText    = "[" + storyName + "](" + storyLink + ")";

        prompt(mdText);
      }
    });
  };

});
