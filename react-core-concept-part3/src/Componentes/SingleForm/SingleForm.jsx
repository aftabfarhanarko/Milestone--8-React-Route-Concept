import React from 'react';

const SingleForm = () => {


    const heandleSubmite = (e) => {
      e.preventDefault();
      console.log(e.target.name.value)
      console.log(e.target.email.value)
    }
    return (
        <div>
          <form onSubmit={heandleSubmite}>
           <input type='text' name='name' placeholder='Your Name' required></input> <br />
           <input type='email' name='email' placeholder='Your Email' required></input> <br />
           <input type='submit' value="Submit"></input>

          </form>
        </div>
    );
};

export default SingleForm;