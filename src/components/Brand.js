import { styled } from "styled-components";
import Star from "./Star";
import { useRecoilState } from "recoil";
import { bookmarkState } from "./atoms";

const Container = styled.div`
  width: 264px;
  height: 264px;
  display: grid;
  grid-template-columns: 187px 77px;
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
  grid-template-columns: 187px 77px;
  grid-template-rows: 24px 24px;
  .follower {
    font-weight: 700;
  }

  .followerNum {
    grid-column: span 2;
    font-weight: 400;
    text-align: right;
  }
`;

function Brand({ brand }) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const handleBookmarkClick = (brand) => {
    if (bookmark.find((ele) => ele.id === brand.id))
      setBookmark(bookmark.filter((ele) => ele.id !== brand.id));
    else setBookmark((prev) => [...prev, brand]);
  };
  return (
    <Container>
      <ImageContainer>
        <img src={brand.brand_image_url} alt={brand.brand_name} />
        <div onClick={() => handleBookmarkClick(brand)}>
          {bookmark.find((ele) => ele.id === brand.id) ? (
            <Star bookmark />
          ) : (
            <Star />
          )}
        </div>
      </ImageContainer>
      <DescContainer>
        <span>{brand.brand_name}</span>
        <span className="follower">관심고객수</span>
        <span className="followerNum">{brand.follower}원</span>
      </DescContainer>
    </Container>
  );
}

export default Brand;
