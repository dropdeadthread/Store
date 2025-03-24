import React from "react";
import { graphql, Link } from "gatsby";

const ProductsPage = ({ data }) => {
  const products = data.allProductsJson.nodes;

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.body_html}</p>
            <p><strong>Price:</strong> ${product.variants[0].price}</p>
            <img src={product.image.src} alt={product.title} width="200" />
            <br />
            <Link to={`/product/${product.handle}`}>View Product</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  {
    allProductsJson {
      nodes {
        id
        handle
        title
        body_html
        variants {
          price
        }
        image {
          src
        }
      }
    }
  }
`;

export default ProductsPage;

