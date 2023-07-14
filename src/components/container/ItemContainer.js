import { styled } from "styled-components";
import Product from "../Product";
import Brand from "../Brand";
import Exhibition from "../Exhibition";
import Category from "../Category";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 12px 0;
`;

function ItemContainer({ item, handleBookmarkClick }) {
  return (
    <Container>
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
    </Container>
  );
}

export default ItemContainer;
