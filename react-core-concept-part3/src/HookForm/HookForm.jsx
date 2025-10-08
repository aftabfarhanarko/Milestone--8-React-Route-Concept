import React from 'react';
// import useInputFild from '../Hook/useInputFild';
import useCounstomHook from '../CountomHook/useCounstomHook';

const HookForm = () => {

    // const  [name, nameChanges] = useInputFild("");
    // const  [email, emailChanges] = useInputFild("");
    const [name, nameChangesa ] = useCounstomHook("");
    const [email, emailChanges] = useCounstomHook("");
    const handelSubmiteHook = e => {
      e.preventDefault();
      console.log(name,email)
    }
    return (
        <div>
            <form onSubmit={handelSubmiteHook}>
              <input type='email' placeholder='email' onChange={nameChangesa} defaultValue={name}></input> <br/>
              <input type='name' placeholder='name' onChange={emailChanges} defaultValue={email}></input> <br/>
              <input type='submit' value="Submit"></input>
            </form>
        </div>
    );
};

export default HookForm;