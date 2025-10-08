import { useState } from "react";

const useInputFild = (defaultValue) => {
    const [filedValue, setFiledValue] = useState(defaultValue);
    const handelFiledChanges = e => {
        setFiledValue(e.target.value);
    };

    return [filedValue, handelFiledChanges];
};

export default useInputFild;