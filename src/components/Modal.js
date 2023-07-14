import { useRecoilValue } from "recoil";
import {
  ModalClose,
  ModalContainer,
  ModalTitle,
  ModalView,
} from "./container/ModalContainer";
import Star from "./Star";
import { ModalStarContainer, StarContainer } from "./container/StarContainer";
import { bookmarkState } from "./atoms";

function Modal({ item, img, title, setModalOpen, handleBookmarkClick }) {
  const modalClose = () => {
    setModalOpen(false);
  };
  const bookmark = useRecoilValue(bookmarkState);
  return (
    <ModalContainer>
      <ModalView>
        <img src={img} alt={title} />
        <ModalTitle>
          <ModalStarContainer onClick={(e) => handleBookmarkClick(e, item)}>
            {bookmark.find((ele) => ele.id === item.id) ? (
              <Star bookmark />
            ) : (
              <Star />
            )}
          </ModalStarContainer>
          {title}
        </ModalTitle>
        <ModalClose onClick={modalClose}>X</ModalClose>
      </ModalView>
    </ModalContainer>
  );
}

export default Modal;
