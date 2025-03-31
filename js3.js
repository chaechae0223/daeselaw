$(document).ready(function () {


    // nav 2tap 
    $('nav ul li.has-sub > a').click(function (e) {
      e.preventDefault(); // a태그 기본 이동 방지
  
      const $parentLi = $(this).parent('li');
  
      // 현재 li에 active 클래스 토글
      $parentLi.toggleClass('active');
  
      // 다른 메뉴 닫기 원하면 여기에 추가
      // $('nav ul li.has-sub').not($parentLi).removeClass('active');
    });

    $(".news-tabs .tab").click(function () {
        $(".news-tabs .tab").removeClass("active");
        $(this).addClass("active");
  
        const tabId = $(this).data("tab");
  
        $(".tab-content").removeClass("active");
        $("#" + tabId).addClass("active");
      });


      $(".pagination .page").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
      });
  
      $(".pagination .prev").click(function () {
        const current = $(".pagination .page.active");
        const prev = current.prev(".page");
        if (prev.length) {
          current.removeClass("active");
          prev.addClass("active");
        }
      });
  
      $(".pagination .next").click(function () {
        const current = $(".pagination .page.active");
        const next = current.next(".page");
        if (next.length) {
          current.removeClass("active");
          next.addClass("active");
        }
      });
  
  
  
    });