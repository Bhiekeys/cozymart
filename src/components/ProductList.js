import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';
import Lottie from 'lottie-react';
import animationData from '../assets/search.json';
import { motion } from 'framer-motion';
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 1 }}>
        <Lottie animationData={animationData} style={{ height: '230px' }} />
        <h5 style={{ textTransform: 'none', textAlign: 'center' }}>
          Sorry, no products matched your search...
        </h5>
      </motion.div>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
