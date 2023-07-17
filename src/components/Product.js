import Star from "./Star";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkState } from "./atoms";
import {
  Container,
  ImageContainer,
  DescContainer,
} from "./container/ProductContainer";
import { useState } from "react";
import Modal from "./Modal";
import { StarContainer } from "./container/StarContainer";

function Product({ product, handleBookmarkClick }) {
  const bookmark = useRecoilValue(bookmarkState);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen ? (
        <Modal
          item={product}
          img={product.image_url}
          title={product.title}
          setModalOpen={setModalOpen}
          handleBookmarkClick={handleBookmarkClick}
        />
      ) : null}
      <Container>
        <ImageContainer onClick={handleModal}>
          <img src={product.image_url} alt={product.title} />
          <StarContainer onClick={(e) => handleBookmarkClick(e, product)}>
            {bookmark.find((ele) => ele.id === product.id) ? (
              <Star bookmark />
            ) : (
              <Star />
            )}
          </StarContainer>
        </ImageContainer>
        <DescContainer>
          <span>{product.title}</span>
          <span className="discount">{`${product.discountPercentage}%`}</span>
          <span className="price">{product.price}원</span>
        </DescContainer>
      </Container>
    </>
  );
}

export default Product;
