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

  

    //소장 무한 재생


    const track = document.querySelector('.slider-track');
    let position = 0;
    const speed = 1;
  
    // 무한 루프 만들기
    track.innerHTML += track.innerHTML;
  
    function animate() {
      position -= speed;
  
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
  
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }
  
    animate();


    // 변호사 소개 작업
  const lawyers = [
    {
      name: "배철욱",
      title: "대표변호사",
      specialty: "형사·이혼 전문",
      desc: "냉철하면서도 수임을 위한 과장이나<br>거짓말을 하지 않는 것이 좋은 서비스를 제공하는<br>가장 중요한 포인트인 것 같습니다.",
      img: "img/lawyer_main.png"
    },
    {
      name: "박천사",
      title: "변호사",
      specialty: "행정·이혼 전문",
      desc: "피해자와 피의자, 양측의 입장을 모두 고려하여<br>합리적인 해결책을 제시합니다.",
      img: "img/lawyer_main_1.png"
    },
    {
      name: "서석우",
      title: "변호사",
      specialty: "형사·민사",
      desc: "민감한 사건일수록 조심스럽게, 그리고 정확하게 접근합니다.",
      img: "img/lawyer_main_2.png"
    },
    {
      name: "이소연",
      title: "변호사",
      specialty: "이혼·행정",
      desc: "감정과 법리를 함께 이해하며<br>더 나은 미래로 나아가도록 돕겠습니다.",
      img: "img/lawyer_main_3.png"
    },
    {
      name: "김광수",
      title: "변호사",
      specialty: "회생·파산",
      desc: "기초부터 탄탄하게 쌓은 경험으로<br>철저하게 방어합니다.",
      img: "img/lawyer_main_4.png"
    },
    {
      name: "방효정",
      title: "변호사",
      specialty: "이혼·상속",
      desc: "아이의 미래까지 생각하는 전략을 제시합니다.",
      img: "img/lawyer_main_5.png"
    },
    {
      name: "신동현",
      title: "변호사",
      specialty: "노동·형사",
      desc: "지나온 길보다 앞으로의 길이 더 중요합니다. 새 출발을 돕겠습니다.",
      img: "img/lawyer_main_6.png"
    }




  ]; // 생략된 lawyer 배열

  const profileBox = document.querySelector('.lawyer_profiles .content3_txt2'); // ✅ 고정된 프로필 영역
  const listItems = document.querySelectorAll('.content3_txt3 li');

  function renderProfile(lawyer) {
    profileBox.innerHTML = `
      <div class="info_img">
        <img src="${lawyer.img}" alt="${lawyer.name} 변호사">
      </div>
      <div class="info">
        <h3>${lawyer.name} <span>${lawyer.title}</span></h3>
        <p class="special">${lawyer.specialty}</p>
        <img src="img/Line_1.png" alt="" class="line1">
        <p class="desc"><span>${lawyer.desc}</span></p>
        <button class="btn-detail"><a href="#">자세히 보기</a></button>
      </div>
    `;
  }

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index);
      renderProfile(lawyers[index]);
    });
  });

  renderProfile(lawyers[0]);

    



    // 지도 연결

    const mapData = {
      서울: {
        address: "서울 서초구 서초중앙로 156 블루원빌딩 415호",
        hours: "평일 09:00 ~ 18:00",
        tel: "1660-3868",
        notice: "24시간 전화상담 가능",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1776.6073301616416!2d127.01203256371545!3d37.49484024435432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca12e493c6769%3A0x55291e9c4fc1fcfe!2z67KV66y067KV7J24IOuMgOyEuCDshJzsmrjsgqzrrLTshow!5e0!3m2!1sko!2skr!4v1743410360969!5m2!1sko!2skr"
      },
      대전: {
        address: "대전 서구 둔산중로 74 인곡타워 4층",
        hours: "평일 09:00 ~ 18:00",
        tel: "1660-3868",
        notice: "24시간 전화상담 가능",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.305991183808!2d127.38445197625414!3d36.35336649275943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356549e7ca1a6af3%3A0x5781149cb0257dc0!2z67KV66y067KV7J24IOuMgOyEuCDrjIDsoITsgqzrrLTshow!5e0!3m2!1sko!2skr!4v1743410061699!5m2!1sko!2skr"
      },
      인천: {
        address: "인천 미추홀구 경원대로 890, 102호",
        hours: "평일 09:00 ~ 18:00",
        tel: "1800-5010",
        notice: "24시간 전화상담 가능",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.38430075502137!2d126.68983288619988!3d37.462114097893576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b79d7ea87a111%3A0x2c290eb3d9732d74!2z7IOB7IaN7KCE66y467OA7Zi47IKsIOuyleustOuyleyduCDrjIDshLg!5e0!3m2!1sko!2skr!4v1743410475530!5m2!1sko!2skr"
      }
    };
    
    const tabItems = document.querySelectorAll(".map_tap li");
    const infoRows = document.querySelectorAll(".map_info .info_row");
    const mapFrame = document.querySelector(".map_go iframe");
    
    tabItems.forEach(tab => {
      tab.addEventListener("click", () => {
        // 탭 active 처리
        tabItems.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    
        const city = tab.textContent.trim();
        if (mapData[city]) {
          const { address, hours, tel, notice, mapUrl } = mapData[city];
    
          infoRows[0].querySelector(".text").textContent = address;
          infoRows[1].querySelector(".text").textContent = hours;
          infoRows[2].querySelector(".tel").textContent = tel;
          infoRows[2].querySelector(".red").textContent = notice;
    
          // ✅ 지도 iframe 변경
          mapFrame.setAttribute("src", mapUrl);
        }
      });
    });
    



  });