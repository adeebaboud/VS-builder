
function setCookie(name) {
  document.cookie = name;
}


$(".ListView").on('change', function () {
  setCookie('list');
  $(".ortamList").addClass('ListView');
  console.log(document.cookie);
});

$(".GridView").on('change', function () {
  $(".ortamList").removeClass('ListView');
  setCookie('grid');
  console.log(document.cookie);
});

var x = document.cookie;

if (x == 'list') {
  $(".ortamList").addClass('ListView');
  $(".ListView").attr('checked', 'checked');
}
else if (x == 'grid') {
  $(".ortamList").removeClass('ListView');
  $(".GridView").attr('checked', 'checked');
}

$(".ortamImg").on('click', function () {
  $('#drop-area').fadeOut();
  $('.ortamList').each(function () {
    $('.ortamList div').removeClass("activeImg");
  })

  if ($('.preview').is(':hidden')) {
    $(this).addClass("activeImg");
    var clickedSrc = $(this).find('img').attr('src');
    var $clickedItem = $(this);
    var itemOffset = $clickedItem.offset().top - $('.ortamList').offset().top + $('.ortamList').scrollTop();
    var itemHeight = $clickedItem.outerHeight();
    var listHeight = $('.ortamList').height();
    var newPosition = itemOffset - (listHeight - itemHeight) / 2;
    $('.ortamList').animate({
      scrollTop: newPosition + 100
    }, 500);

  }

  $('.preview img').attr('src', clickedSrc);

  $(".preview").stop().animate({
    width: 'toggle',
    marginLeft: 'toggle',
    opacity: 'toggle'
  }, 400);



});

$('#yukle').on('click', function () {
  $('#drop-area').fadeIn();
});
$('.close-button').on('click', function () {
  $('#drop-area').fadeOut();
});


