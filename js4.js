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
  
    // 각 지점 정보 설정
const branchData = {
    서울: {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1776.6073301616416!2d127.01203256371545!3d37.49484024435432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca12e493c6769%3A0x55291e9c4fc1fcfe!2z67KV66y067KV7J24IOuMgOyEuCDshJzsmrjsgqzrrLTshow!5e0!3m2!1sko!2skr!4v1743410360969!5m2!1sko!2skr",
      address: "서울 서초구 서초중앙로 156 블루원빌딩 415호",
      hours: "평일 09:00 ~ 18:00",
      phone: "1660-3868 <span class='highlight'>24시간 전화상담 가능</span>"
    },

    대전: {
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.305991183808!2d127.38445197625414!3d36.35336649275943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356549e7ca1a6af3%3A0x5781149cb0257dc0!2z67KV66y067KV7J24IOuMgOyEuCDrjIDsoITsgqzrrLTshow!5e0!3m2!1sko!2skr!4v1743410061699!5m2!1sko!2skr",
        address: "대전 서구 둔산중로 74 인곡타워 4층",
        hours: "평일 09:00 ~ 18:00",
        phone: "1660-3868 <span class='highlight'>24시간 전화상담 가능</span>"
      },

    인천: {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.38430075502137!2d126.68983288619988!3d37.462114097893576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b79d7ea87a111%3A0x2c290eb3d9732d74!2z7IOB7IaN7KCE66y467OA7Zi47IKsIOuyleustOuyleyduCDrjIDshLg!5e0!3m2!1sko!2skr!4v1743410475530!5m2!1sko!2skr",
      address: "인천 미추홀구 경원대로 890, 102호",
      hours: "평일 09:00 ~ 18:00",
      phone: "1800-5010 <span class='highlight'>24시간 전화상담 가능</span>"
    }
  };
  
  // 요소 참조
  const tabButtons = document.querySelectorAll(".map-tabs .tab");
  const mapImage = document.querySelector(".map-image");
  const infoRows = document.querySelectorAll(".info-row");
  
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 탭 버튼 활성화 클래스 처리
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
  
      const branch = btn.textContent.trim();
      const data = branchData[branch];
  
      // 지도 iframe으로 교체
      mapImage.innerHTML = `<iframe src="${data.mapSrc}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  
      // 텍스트 정보 변경
      infoRows[0].querySelector(".text").innerHTML = data.address;
      infoRows[1].querySelector(".text").innerHTML = data.hours;
      infoRows[2].querySelector(".text").innerHTML = data.phone;
    });
  });
  
    });