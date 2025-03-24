import React from 'react';
import ProductCard from '../ProductCard';
import * as styles from './ProductCardGrid.module.css';

const ProductCardGrid = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.handle} product={product} />
      ))}
    </div>
  );
};

export default ProductCardGrid;
