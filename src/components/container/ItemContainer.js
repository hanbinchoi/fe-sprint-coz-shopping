import { styled } from "styled-components";
import Product from "../Product";
import Brand from "../Brand";
import Exhibition from "../Exhibition";
import Category from "../Category";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 12px 0;
`;

function ItemContainer({ item, handleBookmarkClick, filterId }) {
  const [ref, inView] = useInView();
  const list = useRef(12);
  const [now, setNow] = useState(item.slice(0, Number(list.current)));
  useEffect(() => {
    if (now.length === 4) return;
    if (inView) {
      list.current += 12;
    }
    switch (filterId) {
      case 0:
        setNow(item.slice(0, list.current));
        break;
      case 1:
        setNow(
          item.filter((ele) => ele.type === "Product").slice(0, list.current)
        );
        break;
      case 2:
        setNow(
          item.filter((ele) => ele.type === "Brand").slice(0, list.current)
        );
        break;
      case 3:
        setNow(
          item.filter((ele) => ele.type === "Exhibition").slice(0, list.current)
        );
        break;
      case 4:
        setNow(
          item.filter((ele) => ele.type === "Category").slice(0, list.current)
        );
        break;
      default:
        setNow(item.slice(0, 4));
    }
  }, [inView, filterId, item]);
  return (
    <Container>
      {now.map((ele, idx) =>
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
      <div ref={ref}></div>
    </Container>
  );
}

export default ItemContainer;
