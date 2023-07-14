import { styled } from "styled-components";
import Star from "./Star";
import { useRecoilState } from "recoil";
import { bookmarkState } from "./atoms";

const Container = styled.div`
  width: 264px;
  height: 264px;
  display: grid;
  grid-template-columns: 214px 50px;
  grid-template-rows: 210px 54px;
`;
const ImageContainer = styled.div`
  position: relative;
  grid-column: span 2;
  img {
    width: 264px;
    height: 210px;
    object-fit: cover;
  }
`;
const DescContainer = styled.div`
  margin-top: 6px;
  grid-column: span 2;
  font-size: 16px;
  font-weight: 800;
  display: grid;
  grid-template-columns: 214px 50px;
  grid-template-rows: 24px 24px;
  .discount {
    color: #452cdd;
    text-align: right;
  }

  .price {
    grid-column: span 2;
    font-weight: 400;
    text-align: right;
  }
`;

function Product({ product }) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const handleBookmarkClick = (product) => {
    if (bookmark.find((ele) => ele.id === product.id))
      setBookmark(bookmark.filter((ele) => ele.id !== product.id));
    else setBookmark((prev) => [...prev, product]);
  };
  return (
    <Container>
      <ImageContainer>
        <img src={product.image_url} alt={product.title} />
        <div onClick={() => handleBookmarkClick(product)}>
          {bookmark.find((ele) => ele.id === product.id) ? (
            <Star bookmark />
          ) : (
            <Star />
          )}
        </div>
      </ImageContainer>
      <DescContainer>
        <span>{product.title}</span>
        <span className="discount">{`${product.discountPercentage}%`}</span>
        <span className="price">{product.price}원</span>
      </DescContainer>
    </Container>
  );
}

export default Product;
