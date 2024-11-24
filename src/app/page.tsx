import React from 'react';

import Hero from './components/Hero';
import Card from './components/Card';
import Product from './components/Product';
import RelatedProducts from './components/RelatedProducts';
import GroceryCategories from './components/GroceryCategories';

// import { Header } from './components/Header/page';
// import Bakery from './bakery/page';


export default function Page() {
  return (
    <div>
      {/* <Header /> */}
     
      <Hero />
      <Card />
      <Product />
      <RelatedProducts/>
      <GroceryCategories/>
      {/* <Bakery */}
     
    </div>
  );
}
