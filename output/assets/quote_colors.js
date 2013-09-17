$(function() {
   // fix unescaped chars
   $('pre').each(function(i, el) {
    $(this).html($(this).html().replace(/</g, '&lt;').replace(/>/g, '&gt;'));
   });
   // resize text
   $('blockquote p:not(".special")').each(function(i, el) {
    var length = el.innerText.length;
    if(length > 45) {
      $(el).css({ fontSize: '24px', lineHeight: '140%' });
    }
    if(length > 100) {
      $(el).css({ fontSize: '22px', lineHeight: '140%'});
      // light-beige
      $(el).parent().css({ backgroundColor: '#f6f0d8', color: '#424242' });
    }
    if(length > 130) {
      $(el).css({ fontSize: '20px', lineHeight: '140%' });
      // light-green
      $(el).parent().css({ backgroundColor: '#9ec9ac', color: '#424242' });
    }
   });
});
