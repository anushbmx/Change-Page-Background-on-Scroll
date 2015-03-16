$(document).ready(function(){  
  var wHeight = $(window).innerHeight();
  var siblings = $('.slide').siblings();
  var perset = {};
  var sumHeight = 0;
  for(var i = 0; i<siblings.length; i++) {
    if(siblings[i].dataset.background){
      perset[sumHeight] =  siblings[i].dataset.background;
    }
    else
      perset[sumHeight] =  0;

    sumHeight= sumHeight + siblings[i].clientHeight;
  }
  processScroll();

  function lessThan(nums, key){
    if(nums == null || nums.length == 0 || key ==0 ) 
      return 0;
    low = 0;
    high = nums.length -1;
    while(low <= high){
        mid = parseInt((low + high) >> 1);
        if(key <= nums[mid]){
            high = mid - 1;
        }else {
            low = mid +1;
        }
    }
    return high;
  }

  var scroll_pos = 0;

  function processScroll() { 
    scroll_pos = $(this).scrollTop();

    var presetHeights = Object.keys(perset);
    var x = lessThan(presetHeights,scroll_pos);
    var bgColor = perset[presetHeights[x]];
    if(bgColor) {
      $("body").css('background-color',bgColor);
    }
  }

  $(document).scroll(processScroll);
});