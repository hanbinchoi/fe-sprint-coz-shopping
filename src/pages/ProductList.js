import { useEffect, useState } from "react";
import {
  FilterContainer,
  ProductListContainer,
} from "../components/container/ProductListContainer";
import axios from "axios";
import Filter from "../components/Filter";
import allImg from "../img/filter-all.png";
import brandImg from "../img/filter-brand.png";
import categoryImg from "../img/filter-category.png";
import exhibiImg from "../img/filter-exhibition.png";
import productImg from "../img/filter-product.png";
import ItemContainer from "../components/container/ItemContainer";
import { useRecoilState } from "recoil";
import { bookmarkState } from "../components/atoms";

function ProductList() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => setItem(res.data));
  }, []);
  const [filterId, setFilterId] = useState(0);
  const imgArr = [allImg, productImg, categoryImg, exhibiImg, brandImg];
  const titleArr = ["전체", "상품", "카테고리", "기획전", "브랜드"];
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const handleBookmarkClick = (e, item) => {
    e.stopPropagation();
    if (bookmark.find((ele) => ele.id === item.id))
      setBookmark(bookmark.filter((ele) => ele.id !== item.id));
    else setBookmark((prev) => [...prev, item]);
  };
  const handleFilterClick = (e) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.dataset.id);
    setFilterId(id);
  };
  return (
    <ProductListContainer>
      <FilterContainer>
        {[0, 1, 2, 3, 4].map((ele) => (
          <div key={ele} onClick={handleFilterClick} data-id={ele}>
            <Filter
              img={imgArr[ele]}
              title={titleArr[ele]}
              focused={ele === filterId}
            />
          </div>
        ))}
      </FilterContainer>
      {filterId === 0 ? (
        <ItemContainer item={item} handleBookmarkClick={handleBookmarkClick} />
      ) : filterId === 1 ? (
        <ItemContainer
          item={item.filter((ele) => ele.type === "Product")}
          handleBookmarkClick={handleBookmarkClick}
        />
      ) : filterId === 2 ? (
        <ItemContainer
          item={item.filter((ele) => ele.type === "Category")}
          handleBookmarkClick={handleBookmarkClick}
        />
      ) : filterId === 3 ? (
        <ItemContainer
          item={item.filter((ele) => ele.type === "Exhibition")}
          handleBookmarkClick={handleBookmarkClick}
        />
      ) : (
        <ItemContainer
          item={item.filter((ele) => ele.type === "Brand")}
          handleBookmarkClick={handleBookmarkClick}
        />
      )}
    </ProductListContainer>
  );
}

export default ProductList;
