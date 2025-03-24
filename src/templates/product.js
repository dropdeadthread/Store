import React from "react";
import { graphql } from "gatsby";

const ProductTemplate = ({ data }) => {
  if (!data || !data.productsJson) {
    return <h1>Product not found</h1>;
  }

  const product = data.productsJson;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.body_html}</p>
      <img src={product.image?.src || "https://example.com/default-image.jpg"} alt={product.title} />
      <p><strong>Price:</strong> ${product.variants[0].price}</p>
    </div>
  );
};

// GraphQL query to get a single product by handle
export const query = graphql`
  query($handle: String!) {
    productsJson(handle: { eq: $handle }) {
      title
      body_html
      image {
        src
      }
      variants {
        price
      }
    }
  }
`;

export default ProductTemplate;
