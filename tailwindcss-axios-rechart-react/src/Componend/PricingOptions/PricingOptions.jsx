import React, { use } from 'react';
import Card from './Card';
import Pricecrd from '../Desiy/Pricecrd';

const PricingOptions = ({data}) => {
    const promiose = use(data);
    console.log(promiose);
    
    return (
        <div className='grid grid-cols-3 gap-6 max-w-[1100px] mx-auto'>
            {
                promiose.map(priceas => <Pricecrd priceas={priceas}
                key={priceas.id}
                ></Pricecrd>)
            }
            
        </div>
    );
};

export default PricingOptions;