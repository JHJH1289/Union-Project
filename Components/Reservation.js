import React from "react";

function Reservation() {
  return (
    <section id="contact" className="contact">
      <div className="head_title text-center">
        <h2>더 많은 강의를 원하신다면</h2>
      </div>

      <div className="reservation-wrapper">
        <div className="reservation-column">
          <div className="single_contact_info">
            <h1>Tel</h1>
            <h3>담당자<br />010-1111-1111</h3>
            <h3>담당자<br />010-2222-2222</h3>
          </div>

        </div>

        <div className="reservation-column">
          <div className="reservation-btn">
            <h1 className="highlight">강의 신청</h1><br />
                <a href="/member/login" className="btn btn-lg reservation-button">강의 신청하기</a>
                <br /><br />
                <a href="/member/save" className="btn btn-lg reservation-button">강의 개설 현황</a>
                <br /><br />
                <a href="https://naver.me/5u9FoAPa" className="btn btn-lg reservation-button">강의 만족도 조사</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Reservation;
