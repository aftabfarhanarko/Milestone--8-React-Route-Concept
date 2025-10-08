import React, { createContext, useState } from "react";
import FlowerFrom from "./FlowerFrom";
import FlowesTable from "./FlowesTable";
export const FlowerExport = createContext("");
const Flowers = () => {
    const [flower, setFlower] = useState([])
  return (
    <div>
      <FlowerExport value={ [flower, setFlower]}>
        <FlowerFrom></FlowerFrom>
        <FlowesTable></FlowesTable>
      </FlowerExport>
    </div>
  );
};

export default Flowers;
