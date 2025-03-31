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
  
  
  
    });