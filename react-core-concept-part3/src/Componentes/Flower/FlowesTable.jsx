import React, { use } from 'react';
import { FlowerExport } from './Flowers';

const FlowesTable = () => {
    const [flower] = use(FlowerExport);
    console.log(flower);
    
    return (
        <div>
            <table border="1">
                 <thead>
                     <tr>
                         <th>No</th>
                         <th>Name</th>
                         <th>Price</th>
                         <th>Quentity</th>
                     </tr>
                 </thead>
                 <tbody>
                      {
                        flower.map((element, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{element.name}</td>
                            <td>{element.price}</td>
                            <td>{element.quentity}</td>
                        </tr>)
                      }
                 </tbody>
            </table>
            
        </div>
    );
};

export default FlowesTable;