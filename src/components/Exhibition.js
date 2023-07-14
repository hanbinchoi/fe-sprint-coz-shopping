import Star from "./Star";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkState } from "./atoms";
import {
  Container,
  DescContainer,
  ImageContainer,
} from "./ExhibitionContainer";
import { StarContainer } from "./StarContainer";
import { useState } from "react";
import Modal from "./Modal";

function Exhibition({ exhibition, handleBookmarkClick }) {
  const bookmark = useRecoilValue(bookmarkState);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      {modalOpen ? (
        <Modal
          item={exhibition}
          img={exhibition.image_url}
          title={exhibition.title}
          setModalOpen={setModalOpen}
          handleBookmarkClick={handleBookmarkClick}
        />
      ) : null}
      <Container>
        <ImageContainer onClick={handleModal}>
          <img src={exhibition.image_url} alt={exhibition.title} />
          <StarContainer onClick={() => handleBookmarkClick(exhibition)}>
            {bookmark.find((ele) => ele.id === exhibition.id) ? (
              <Star bookmark />
            ) : (
              <Star />
            )}
          </StarContainer>
        </ImageContainer>
        <DescContainer>
          <span>{exhibition.title}</span>
          <span className="sub-title">{exhibition.sub_title}</span>
        </DescContainer>
      </Container>
    </>
  );
}

export default Exhibition;
