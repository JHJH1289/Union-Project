import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('/member/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('로그아웃 성공');
                onLogout(); // 상태 갱신
                navigate('/'); // 홈으로 이동
            } else {
                console.error('로그아웃 실패:', response.statusText);
                alert('로그아웃에 실패했습니다.');
            }
        } catch (error) {
            console.error('로그아웃 요청 중 오류 발생:', error);
            alert('로그아웃 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <button onClick={handleLogout}>
            로그아웃
        </button>
    );
}

export default LogoutButton;
