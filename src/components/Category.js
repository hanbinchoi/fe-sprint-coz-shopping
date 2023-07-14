import Star from "./Star";
import { useRecoilState } from "recoil";
import { bookmarkState } from "./atoms";
import { Container, ImageContainer, DescContainer } from "./CategoryContainer";

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
