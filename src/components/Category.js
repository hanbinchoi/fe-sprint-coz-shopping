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
`;

function Category({ category }) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const handleBookmarkClick = (category) => {
    if (bookmark.find((ele) => ele.id === category.id))
      setBookmark(bookmark.filter((ele) => ele.id !== category.id));
    else setBookmark((prev) => [...prev, category]);
  };
  return (
    <Container>
      <ImageContainer>
        <img src={category.image_url} alt={category.title} />
        <div onClick={() => handleBookmarkClick(category)}>
          {bookmark.find((ele) => ele.id === category.id) ? (
            <Star bookmark />
          ) : (
            <Star />
          )}
        </div>
      </ImageContainer>
      <DescContainer>
        <span># {category.title}</span>
      </DescContainer>
    </Container>
  );
}

export default Category;
