import React, { Suspense } from 'react';
import Navbar from './Componend/Navbar/Navbar';
import PricingOptions from './Componend/PricingOptions/PricingOptions';
import NavbarPricktise from './Componend/PricktiseNavbar/NavbarPricktise';
import Carts from './Componend/Carts/Carts';
import Joins from './Componend/Joins';
// import ResultCart from './Componend/ResultChast/ResultCart';

const data = fetch("/pricingDta.json").then(res => res.json());

const App = () => {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <NavbarPricktise></NavbarPricktise>
    <Carts></Carts>
      {/* <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions data={data}></PricingOptions>
      </Suspense> */}
      {/* <ResultCart></ResultCart> */}
      <Joins></Joins>
    </>
  );
};

export default App;