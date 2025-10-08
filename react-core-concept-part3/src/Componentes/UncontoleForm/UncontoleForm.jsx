import React, { useRef, useState } from 'react';

const UncontoleForm = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleon = () => {
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

  const submiteHandle = (e) => {
    console.log("Go Now");
    e.preventDefault();
    console.log(e.target.name.value)
    console.log(e.target.email.value)
  }

  const actionsForm = (formsData) => {
    console.log(formsData.get("email"));
    console.log(formsData.get("password"));
  }
  const passwordHandle = (e) => {
    setPassword(e.target.value);
    {
        password.length < 6 ? setError("This is Not 6 Chreacter") : setError("")

    }
  
  }
    return (
        <div>
            <form onSubmit={handleon}>
                <input ref={emailRef} type='email' placeholder='email'></input> <br />
                <input ref={passwordRef} type='password' placeholder='password'></input> <br />
                <input type='submit' value="submite" />

            </form>

            <form onSubmit={submiteHandle}>
                <input type='name' name='name' placeholder='enter your name' /> <br />
                <input type='email' name='email' placeholder='enter your email' /> <br />
                <input type='submit'></input>
            </form>


            <form action={actionsForm}>
               <input type='email' name='email' placeholder='enter your email' required></input> <br />
               <input type='password' name='password' placeholder='enter your password' onChange={passwordHandle} defaultValue={password} required></input> <br />
               <input type='submit' ></input>
            </form>
            <p>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default UncontoleForm;