import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const ListPrices = ({element}) => {
    console.log(element);
    
    return (
        <p className='flex gap-3 mt-2'>
           <CircleCheckBig />
           {element}
        </p>
    );
};

export default ListPrices;