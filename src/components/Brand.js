import Star from "./Star";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkState } from "./atoms";
import {
  Container,
  ImageContainer,
  DescContainer,
} from "./container/BrandContainer";
import { StarContainer } from "./container/StarContainer";
import { useState } from "react";
import Modal from "./Modal";

function Brand({ brand, handleBookmarkClick }) {
  const bookmark = useRecoilValue(bookmarkState);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      {modalOpen ? (
        <Modal
          item={brand}
          img={brand.brand_image_url}
          title={brand.brand_name}
          setModalOpen={setModalOpen}
          handleBookmarkClick={handleBookmarkClick}
        />
      ) : null}
      <Container>
        <ImageContainer onClick={handleModal}>
          <img src={brand.brand_image_url} alt={brand.brand_name} />
          <StarContainer onClick={(e) => handleBookmarkClick(e, brand)}>
            {bookmark.find((ele) => ele.id === brand.id) ? (
              <Star bookmark />
            ) : (
              <Star />
            )}
          </StarContainer>
        </ImageContainer>
        <DescContainer>
          <span>{brand.brand_name}</span>
          <span className="follower">관심고객수</span>
          <span className="followerNum">{brand.follower}</span>
        </DescContainer>
      </Container>
    </>
  );
}

export default Brand;
