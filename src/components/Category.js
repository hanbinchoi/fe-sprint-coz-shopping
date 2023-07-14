import Star from "./Star";
import { useRecoilValue } from "recoil";
import { bookmarkState } from "./atoms";
import {
  Container,
  ImageContainer,
  DescContainer,
} from "./container/CategoryContainer";
import { StarContainer } from "./container/StarContainer";
import { useState } from "react";
import Modal from "./Modal";

function Category({ category, handleBookmarkClick }) {
  const bookmark = useRecoilValue(bookmarkState);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      {modalOpen ? (
        <Modal
          item={category}
          img={category.image_url}
          title={category.title}
          setModalOpen={setModalOpen}
          handleBookmarkClick={handleBookmarkClick}
        />
      ) : null}
      <Container>
        <ImageContainer onClick={handleModal}>
          <img src={category.image_url} alt={category.title} />
          <StarContainer onClick={(e) => handleBookmarkClick(e, category)}>
            {bookmark.find((ele) => ele.id === category.id) ? (
              <Star bookmark />
            ) : (
              <Star />
            )}
          </StarContainer>
        </ImageContainer>
        <DescContainer>
          <span># {category.title}</span>
        </DescContainer>
      </Container>
    </>
  );
}

export default Category;
