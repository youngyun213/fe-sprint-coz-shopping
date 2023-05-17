import styled from "styled-components";

const Product_container = styled.div`
  width: 264px;
  height: 264px;
  margin: 10px;

  img {
    width: 264px;
    height: 210px;
    border-radius: 12px;
    cursor: pointer;
  }

  .right {
    text-align: right;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  #dc {
    color: #452cdd;
  }
`;

function Product({ product }) {
  if (product.type === "Product") {
    return (
      <Product_container>
        <img src={product.image_url}></img>
        <Title>
          <span>{product.title}</span>
          <span id="dc">{product.discountPercentage}%</span>
        </Title>
        <div className="right">{parseInt(product.price).toLocaleString("ko-KR")}원</div>
      </Product_container>
    );
  }
  if (product.type === "Category") {
    return (
      <Product_container>
        <img src={product.image_url}></img>
        <Title>
          <span>{product.title}</span>
        </Title>
      </Product_container>
    );
  }
  if (product.type === "Exhibition") {
    return (
      <Product_container>
        <img src={product.image_url}></img>
        <Title>
          <span># {product.title}</span>
        </Title>
        <span>{product.sub_title}</span>
      </Product_container>
    );
  }
  if (product.type === "Brand") {
    return (
      <Product_container>
        <img src={product.brand_image_url}></img>
        <Title>
          <span>{product.brand_name}</span>
          <span>관심 고객수</span>
        </Title>
        <div className="right">{product.follower}</div>
      </Product_container>
    );
  }
}

export default Product;
