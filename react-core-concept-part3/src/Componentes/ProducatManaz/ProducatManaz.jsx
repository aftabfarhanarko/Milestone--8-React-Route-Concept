import React, { useState } from "react";
import ProducatForm from "./ProducatForm";
import ProducatTable from "./ProducatTable";

const ProducatManaz = () => {
  const [producat, setProducat] = useState([]);
  
  const handelProducat = (newproducat) => {
    const newsProducats = [...producat, newproducat];
    setProducat(newsProducats);
  };
  return (
    <div>
      <ProducatForm handelProducat={handelProducat}></ProducatForm>
      <ProducatTable producat={producat}></ProducatTable>
    </div>
  );
};

export default ProducatManaz;
