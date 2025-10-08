import React, { useContext } from "react";
import { Wordes} from "../../App";

const ProducatTable = ({ producat }) => {
  const worlds = useContext(Wordes);

  return (
    <div>
      <h2>{worlds}</h2>
      <h3>Total Product: {producat.length}</h3>
      <table border="1">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {producat.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quintety}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProducatTable;
