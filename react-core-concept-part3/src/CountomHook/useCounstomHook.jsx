import { useState } from "react";

const useCounstomHook = (defaultValue) => {
    const [filed , setFiled] = useState(defaultValue);
    const handleFiled = e => {
        setFiled(e.target.value);
    }
    return [ filed, handleFiled];
};

export default useCounstomHook;