import React, { use } from 'react';
import { FlowerExport } from './Flowers';

const FlowerFrom = () => {
  const  [flower, setFlower] = use(FlowerExport);
  const handelaFlowers = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quentity = e.target.quentity.value;

        const newFlower = {
          name,
          price,
          quentity
        }
        const addes = [...flower, newFlower]
        setFlower(addes);
        
  }
  return (
    <div>
       <h1>This is Form </h1>
       <form onSubmit={handelaFlowers}>
          <input type='text' name='name' placeholder='enter flower name'></input> <br/>
          <input type='text' name='price' placeholder='enter flower price'></input> <br/>
          <input type='quentity' name='quentity' placeholder='enter flower quentity'></input> <br/>
          <input type='submit' value="Submite"></input>
       </form>
    </div>
  );
};

export default FlowerFrom;