import React, { useState } from "react";
import "./ReservationForm.css";

function ReservationForm() {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!count || parseInt(count, 10) <= 0) {
      alert("인원수는 1명 이상이어야 합니다.");
      return;
    }

    const newEntry = {
      name: name.trim(),
      count: parseInt(count, 10),
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL || "http://localhost:8080"}/reservations`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEntry),
        }
      );

      if (response.ok) {
        alert("예매가 완료되었습니다!");
        setName("");
        setCount("");
        window.close();
      } else {
        alert("서버 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("서버 요청 실패:", error);
      alert("서버에 연결할 수 없습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reservation-form">
      <h2>예매 정보 입력</h2>
      <form onSubmit={handleSubmit}>
        <label>이름</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>인원수</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          required
          min="1"
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "처리 중..." : "제출"}
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
