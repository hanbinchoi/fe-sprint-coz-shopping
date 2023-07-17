import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { notiState } from "./atoms";

const Notification = styled.div`
  transition: transform 0.6s ease-in-out;
  animation: toast-in-right 0.6s;
  background: black;
  transition: 0.3s ease;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  color: #000;
  opacity: 0.9;
  font-weight: 600;
  height: 50px;
  width: 360px;
  color: #fff;
  padding: 15px;
  margin: 10px;
  &.fade-out {
    opacity: 0;
    transform: opacity 4s;
  }

  color: ${(props) => (props.flag === "true" ? "#2A7DE1" : "tomato")};

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export default function Toast({ text, flag }) {
  const [isFading, setIsFading] = useState(false);
  const [noti, setNoti] = useRecoilState(notiState);
  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        setIsFading(true);
      }
    }, 4000);
    setTimeout(() => {
      setNoti((prev) => prev.slice(1));
    }, 5000);
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("Toast", noti);
  return (
    <Notification flag={flag + ""} className={`${isFading ? "fade-out" : ""}`}>
      {flag
        ? `${text}(이)가 북마크에 추가되었습니다.`
        : `${text}(이)가 북마크에서 제거되었습니다.`}
    </Notification>
  );
}
