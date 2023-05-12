import React, { useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import App from '../App.js';

function PostTimeAgo({ postTime }) {

  const [timeAgo, setTimeAgo] = useState(['3시간 전', '1일 전', '30분 전']);

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentTime = new Date();
      const postedTime = new Date(postTime);

      const timeDifference = currentTime - postedTime;

      // 변환할 단위와 값의 쌍을 정의합니다.
      const units = [
        { label: '일', duration: 24 * 60 * 60 * 1000 },
        { label: '시간', duration: 60 * 60 * 1000 },
        { label: '분', duration: 60 * 1000 },
        { label: '초', duration: 1000 },
      ];

      // 차이를 단위로 변환하여 표시합니다.
      for (let i = 0; i < units.length; i++) {
        const { label, duration } = units[i];
        if (timeDifference >= duration) {
          const time = Math.floor(timeDifference / duration);
          setTimeAgo(`${time}${label} 전`);
          break;
        }
      }
    };

    calculateTimeAgo();
  }, [postTime]);

  return <span>{timeAgo}</span>;
}

export default PostTimeAgo;
