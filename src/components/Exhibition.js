import Star from "./Star";
import { useRecoilState } from "recoil";
import { bookmarkState } from "./atoms";
import {
  Container,
  DescContainer,
  ImageContainer,
} from "./ExhibitionContainer";

function Exhibition({ exhibition }) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const handleBookmarkClick = (exhibition) => {
    if (bookmark.find((ele) => ele.id === exhibition.id))
      setBookmark(bookmark.filter((ele) => ele.id !== exhibition.id));
    else setBookmark((prev) => [...prev, exhibition]);
  };
  return (
    <Container>
      <ImageContainer>
        <img src={exhibition.image_url} alt={exhibition.title} />
        <div onClick={() => handleBookmarkClick(exhibition)}>
          {bookmark.find((ele) => ele.id === exhibition.id) ? (
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
