
$(function() {




// ハンバーガー
$('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
  $('.drawer-background').toggleClass('is-active');

  return false;
});


// header 

  $(window).on('scroll', function() {
    if( $(this).scrollTop() > $('#js-top').outerHeight() ) {
      $('body').addClass('add-scrolled');
    } else {
      $('body').removeClass('add-scrolled');
    }
  });

  const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    width: 274,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
        width: 400,
      }
    }
  });


//アコーディオン
$('.faq-item-question').on('click', function(){
  $(this).next().slideToggle();
  $(this).children('.faq-box-icon').toggleClass('is-open');
});

// wowの初期化を設定する
new WOW().init();


// スムーススクロール
// スクロールすると表示される

  $(window).scroll(function(){

      if($(this).scrollTop() > 80) {
          $(".to-top").fadeIn();
      } else {
          $(".to-top").fadeOut();
      }
  });

  $("#to-top").click(function(){
      $("body, html").animate({
          scrollTop: 0
      }, 500);
  });
  
// ページ内リンク
  $('a[href^="#"]').on('click', function(){

    //headerの高さを取得
    let header = $('.header').innerHeight();
    // idを取得
    let id = $(this).attr('href');
    // 位置を取得
    let position = $(id).offset().top - header;
    console.log(id);
    console.log(position);
    

      $("html, body").animate({
          scrollTop: position
      }, 500);
  });



  //google form
  let $form = $('#js-form')

  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  }); 

  //formの入力確認
  //  全部入力したら色を変える
    let $submit = $( '#js-submit' )

    $( '#js-form input, #js-form textarea, #js-form select' ).on( 'change', function() {
        if(
            $( '#js-form input[type="text"]' ).val() !== "" &&
            $( '#js-form input[type="email"]' ).val() !== "" &&
            $( '#js-form input[name="entry.127436460"]' ).prop( 'checked' ) === true
        ) {
            //入力されたとき
            $submit.prop( 'disabled', false )
            $submit.addClass( '-active' )
        } else {
            //入力されていないとき
          $submit.prop( 'disabled', true )
          $submit.removeClass( '-active' )
        }
    })


});
