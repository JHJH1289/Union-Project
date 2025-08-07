import React from "react";

function ReservationLogin() {
  return (
    <section id="contact" className="contact">
      <div className="head_title text-center">
        <h2>예매 안내</h2>
      </div>

      <div className="reservation-wrapper">
        <div className="reservation-column">
          <div className="single_contact_info">
            <h1>Tel</h1>
            <h3>
              김지열<br />010-9797-7966
            </h3>
            <h3>
              정재훈<br />010-8763-1289
            </h3>
          </div>

          <div className="single_contact_info">
            <h1>Account Number</h1>
            <h3>
              김민채<br />카카오 3333296886496
            </h3>
          </div>
        </div>

        <div className="reservation-column">
          <div className="reservation-btn">
            <h1 className="highlight">예매하기</h1>
            <a
              href=""
              className="btn btn-lg reservation-button"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `${window.location.origin}/#/reservation-form`, // 🔥 HashRouter 경로
                  '_blank',
                  'width=500,height=600'
                );

              }}
            >
              예매하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationLogin;
