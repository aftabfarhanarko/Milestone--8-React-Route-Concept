import React, { Suspense } from 'react';
import Navbarr from './Componend/Navbarr/Navbarr';
import Charts from './Componend/Charts/Charts';
import New from './Componend/Charts/New';
import Axima from './Componend/Axima/Axima';
import axios from 'axios';

const getTheData = axios.get("/Dta.json")

const App = () => {
  return (
    <div>
       <Navbarr></Navbarr>
       <Charts></Charts>
       <Suspense>
         <Axima getTheData={getTheData}></Axima>
       </Suspense>
       <New></New>
    </div>
  );
};

export default App;