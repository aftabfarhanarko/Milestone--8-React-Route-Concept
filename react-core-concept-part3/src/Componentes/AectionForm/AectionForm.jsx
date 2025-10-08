import React, { useState } from 'react';

const AectionForm = () => {
      
    const [pass, setPass] = useState("");
    const [error, setError] = useState("")
    const heandleActions = (formsData) => {
        console.log(formsData.get("email"));
        console.log(formsData.get("password"));
    }
    
    const passwordHandle = (e) => {
        console.log(e.target.value);
        setPass(e.target.value);
        
          {pass.length < 6 ? setError("This is Not 6 Chientncs") : setError("") } ;

    }
    return (
        <div>
            <form action={heandleActions}>
                <input type='email' placeholder='email' name='email' required></input> <br />
                <input type='password' placeholder='password' name='password' onChange={passwordHandle} defaultValue={pass}></input> <br />
                <input type='submit' value="Submite"></input>
            </form>
            <p style={{color:"red"}}>

                <small>{error}</small>
            </p>
        </div>
    );
};

export default AectionForm;