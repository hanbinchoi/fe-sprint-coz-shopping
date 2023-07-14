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
  grid-template-columns: 264px;
  grid-template-rows: 24px 24px;
  .sub-title {
    font-weight: 400;
  }
`;

function Exhibition({ exhibition }) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const handleBookmarkClick = (id) => {
    if (bookmark.find((ele) => ele === id))
      setBookmark(bookmark.filter((ele) => ele !== id));
    else setBookmark((prev) => [...prev, id]);
  };
  return (
    <Container>
      <ImageContainer>
        <img src={exhibition.image_url} alt={exhibition.title} />
        <div onClick={() => handleBookmarkClick(exhibition.id)}>
          {bookmark.find((ele) => ele === exhibition.id) ? (
            <Star bookmark />
          ) : (
            <Star />
          )}
        </div>
      </ImageContainer>
      <DescContainer>
        <span>{exhibition.title}</span>
        <span className="sub-title">{exhibition.sub_title}</span>
      </DescContainer>
    </Container>
  );
}

export default Exhibition;
