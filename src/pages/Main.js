import { useRecoilState } from "recoil";
import { bookmarkState, itemState, notiState } from "../components/atoms";
import { useEffect } from "react";
import axios from "axios";
import {
  Container,
  EmptyContainer,
  ListTitle,
} from "../components/container/MainContainer";
import ItemContainer from "../components/container/ItemContainer";

function Main() {
  console.log("Main!");
  const [item, setItem] = useRecoilState(itemState);
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const [noti, setNoti] = useRecoilState(notiState);
  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => setItem(res.data));
  }, []);
  const handleBookmarkClick = (e, item) => {
    e.stopPropagation();
    if (bookmark.find((ele) => ele.id === item.id)) {
      setBookmark(bookmark.filter((ele) => ele.id !== item.id));
      setNoti((prev) => [
        ...prev,
        {
          id: Math.random(),
          title: item.brand_name ?? item.title,
          flag: false,
        },
      ]);
    } else {
      setBookmark((prev) => [...prev, item]);
      setNoti((prev) => [
        ...prev,
        { id: Math.random(), title: item.brand_name ?? item.title, flag: true },
      ]);
    }
  };

  return (
    <div>
      <Container>
        <ListTitle>상품 리스트</ListTitle>
        {item.length === 0 ? (
          <EmptyContainer>loading...</EmptyContainer>
        ) : (
          <ItemContainer
            item={item}
            handleBookmarkClick={handleBookmarkClick}
          />
        )}

        <ListTitle>북마크 리스트</ListTitle>
        {bookmark.length === 0 ? (
          <EmptyContainer>북마크가 없습니다.</EmptyContainer>
        ) : (
          <ItemContainer
            item={bookmark}
            handleBookmarkClick={handleBookmarkClick}
          />
        )}
      </Container>
    </div>
  );
}

export default Main;
