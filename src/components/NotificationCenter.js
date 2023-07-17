import { useRecoilState } from "recoil";
import Toast from "./Toast";
import { bookmarkState, notiState } from "./atoms";
import { styled } from "styled-components";

const NotificationContainer = styled.div`
  font-size: 1rem;
  position: fixed;
  z-index: 3;
  bottom: 80px;
  right: 12px;
`;

function NotificationCenter() {
  const [noti, setNoti] = useRecoilState(notiState);
  console.log(noti);
  return (
    <NotificationContainer>
      {noti.map((n) => (
        <Toast key={n.id} text={n.title} dismissTime={4000} flag={n.flag} />
      ))}
    </NotificationContainer>
  );
}

export default NotificationCenter;
