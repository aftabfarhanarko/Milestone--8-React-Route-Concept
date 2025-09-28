import React from 'react';
import ListPrices from './ListPrices';

const Card = ({priceas}) => {
    return (
        <div className='bg-amber-400 mt-4 p-6 rounded-2xl flex flex-col'>
            <h1 className='text-5xl'>{priceas.planName}</h1>
            <h3>{priceas.price}</h3>
            <div className='bg-amber-200 p-4 rounded-2xl flex-1'>
                <p>{priceas.description}</p>
                {
                    priceas.features.map((element, index) => <ListPrices element={element}
                    key={index}
                    ></ListPrices>)
                }
            </div>
            <button className="btn w-full mt-4">Sucribe</button>
        </div>
    );
};

export default Card;