import styled from "styled-components";
import Product from "../components/Product";
import axios from "axios";
import { useState, useEffect } from "react";

const Main_container = styled.main`
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const List_container = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    padding-bottom: 10px;
  }

  .products {
    display: flex;
  }
`;

function Main() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get("http://cozshopping.codestates-seb.link/api/v1/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <Main_container>
      <List_container>
        <h2>상품 리스트</h2>
        <div className="products">
          {products &&
            products.map((item, idx) => {
              return idx < 4 ? <Product product={item} /> : null;
            })}
        </div>
      </List_container>
      {/* <List_container>
        <h2>북마크 리스트</h2>
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </List_container> */}
    </Main_container>
  );
}

export default Main;
