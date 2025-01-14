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
import { bookmarkState, itemState, notiState } from "../components/atoms";

function ProductList() {
  const [item, setItem] = useRecoilState(itemState);
  const [noti, setNoti] = useRecoilState(notiState);
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

  const handleFilterClick = (e) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.dataset.id);
    setFilterId(id);
  };

  return (
    <ProductListContainer>
      <FilterContainer>
        {titleArr.map((ele, idx) => (
          <div key={idx} onClick={handleFilterClick} data-id={idx}>
            <Filter img={imgArr[idx]} title={ele} focused={idx === filterId} />
          </div>
        ))}
      </FilterContainer>

      <ItemContainer
        item={item}
        handleBookmarkClick={handleBookmarkClick}
        filterId={filterId}
      />
    </ProductListContainer>
  );
}

export default ProductList;
