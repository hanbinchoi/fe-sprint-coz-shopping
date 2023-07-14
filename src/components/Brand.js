import Star from "./Star";
import { useRecoilState } from "recoil";
import { bookmarkState } from "./atoms";
import { Container, ImageContainer, DescContainer } from "./BrandContainer";

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
