import React, { useState } from 'react';

const ProducatForm = ({handelProducat}) => {
    const [error, setError] = useState("")

    const handelProduvcatForm = e => {
         e.preventDefault();
         const name = e.target.name.value;
         const price = e.target.price.value;
         const quintety = e.target.quintety.value;
         const objectReturn = {
            name,
            price,
            quintety
         }
         console.log(objectReturn);
        if(name.length === 0){
            setError("Please Enter a Valid Producat Name");
            return;
        }else if(price.length === 0 || price < 0) {
            setError("Please Enter a Price Amount");
            return ;
        }else if(quintety.length === 0){
          setError("Please Enter Producat Quyintey");
          return;
        }else{
            setError("")
        }

         handelProducat(objectReturn);
         
    }
    return (
        <div>
            <form onSubmit={handelProduvcatForm}>
                <input type='text' name='name' placeholder='producat name'></input> <br/>
                <input type='text' name='price' placeholder='producat price'></input> <br/>
                <input type='text' name='quintety' placeholder='producat quintety'></input> <br/>
                <input type='submit' value="Submite"></input>
            </form>
            <p style={{color: "red"}}><small>{error}</small></p>
            
        </div>
    );
};

export default ProducatForm;