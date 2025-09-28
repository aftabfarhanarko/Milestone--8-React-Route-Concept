import React, { use } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";



const Axima = ({getTheData}) => {
    const promisesData = use(getTheData);
    console.log(promisesData.data);
    
    return (
        <div>
            <SimpleMDE />;
        </div>
    );
};

export default Axima;