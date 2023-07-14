import Star from "./Star";
import { useRecoilState } from "recoil";
import { bookmarkState } from "./atoms";
import { Container, ImageContainer, DescContainer } from "./ProductContainer";

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
