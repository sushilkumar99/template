// scrollr js intilision
var s = skrollr.init({
    edgeStrategy: 'set',
    easing: {
        WTF: Math.random,
        inverted: function(p) {
            return 1-p;
        }
    }
});

$(document).ready(function() {
    $('.gallerys').magnificPopup({

        type: 'image',
        delegate : 'a',

        gallery: {
          enabled: true
      }
  });

  $('.list-unstyled').click(function(){
      const value = $(this).attr('data-filter');
      if(value == 'all'){
          $('.box').show(1000);
      }
      else{
          $('.box').not('.'+value).hide(1000);
          $('.box').filter('.'+value).show(1000);
      }
  });
  
    

});