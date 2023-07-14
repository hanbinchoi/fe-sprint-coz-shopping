import Product from "../components/Product";
import { useRecoilState } from "recoil";
import { bookmarkState } from "../components/atoms";
import Brand from "../components/Brand";
import Exhibition from "../components/Exhibition";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  ListTitle,
  ItemContainer,
} from "../components/container/MainContainer";

function Main() {
  console.log("Main!");
  const [item, setProducts] = useState([]);

  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => setProducts(res.data));
  }, []);

  const handleBookmarkClick = (e, item) => {
    e.stopPropagation();
    if (bookmark.find((ele) => ele.id === item.id))
      setBookmark(bookmark.filter((ele) => ele.id !== item.id));
    else setBookmark((prev) => [...prev, item]);
  };

  return (
    <div>
      <Container>
        <ListTitle>상품 리스트</ListTitle>
        <ItemContainer>
          {item.map((ele) =>
            ele.type === "Product" ? (
              <Product
                key={ele.id}
                product={ele}
                handleBookmarkClick={handleBookmarkClick}
              />
            ) : ele.type === "Brand" ? (
              <Brand
                key={ele.id}
                brand={ele}
                handleBookmarkClick={handleBookmarkClick}
              />
            ) : ele.type === "Exhibition" ? (
              <Exhibition
                key={ele.id}
                exhibition={ele}
                handleBookmarkClick={handleBookmarkClick}
              />
            ) : (
              <Category
                key={ele.id}
                category={ele}
                handleBookmarkClick={handleBookmarkClick}
              />
            )
          )}
        </ItemContainer>
        <ListTitle>북마크 리스트</ListTitle>
        <ItemContainer>
          {bookmark.length === 0
            ? "아무것도 없어요😿"
            : bookmark
                .slice(0, 4)
                .map((ele) =>
                  ele.type === "Product" ? (
                    <Product
                      key={ele.id}
                      product={ele}
                      handleBookmarkClick={handleBookmarkClick}
                    />
                  ) : ele.type === "Brand" ? (
                    <Brand key={ele.id} brand={ele} />
                  ) : ele.type === "Exhibition" ? (
                    <Exhibition
                      key={ele.id}
                      exhibition={ele}
                      handleBookmarkClick={handleBookmarkClick}
                    />
                  ) : (
                    <Category
                      key={ele.id}
                      category={ele}
                      handleBookmarkClick={handleBookmarkClick}
                    />
                  )
                )}
        </ItemContainer>
      </Container>
    </div>
  );
}

export default Main;
