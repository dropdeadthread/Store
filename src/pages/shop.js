import React, { useState } from 'react';
import { graphql } from 'gatsby';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import Button from '../components/Button';

const ShopPage = ({ data }) => {
  const [showFilter, setShowFilter] = useState(false);
  const products = data.allProductsJson.nodes; // ✅ Use real products from GraphQL

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs crumbs={[{ link: '/', label: 'Home' }, { label: 'Shop' }]} />
          </div>
        </Container>

        <Banner maxWidth={'650px'} name={'Shop All Products'} subtitle={'Browse our latest designs and apparel.'} />

        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>{products.length} items</span>
            <div className={styles.controllerContainer}>
              <div className={styles.iconContainer} role={'presentation'} onClick={() => setShowFilter(!showFilter)}>
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div className={`${styles.iconContainer} ${styles.sortContainer}`}>
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div>
          </div>

          <CardController closeFilter={() => setShowFilter(false)} visible={showFilter} />

          <div className={styles.chipsContainer}>
            <Chip name={'XS'} />
            <Chip name={'S'} />
          </div>

          <div className={styles.productContainer}>
            <ProductCardGrid products={products} />
          </div>

          <div className={styles.loadMoreContainer}>
            <Button fullWidth level={'secondary'}>LOAD MORE</Button>
          </div>
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  );
};

export default ShopPage;

// ✅ GraphQL Query to Fetch Products
export const query = graphql`
  query {
    allProductsJson {
      nodes {
        handle
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
  }
`;
