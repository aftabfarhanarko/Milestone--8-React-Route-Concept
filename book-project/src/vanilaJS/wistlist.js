const getWhistList = () => {
    const getItemsa = localStorage.getItem("whistList");
    if(getItemsa){
        const getReturn = JSON.parse(getItemsa);
        return getReturn;
    }
    return [];
}


const setWihetList = (id) => {
    const storeItems = getWhistList();
    if(storeItems.includes(id)){
        alert('This id Alrodey Stors');
    }else{
        storeItems.push(id);
        const data = JSON.stringify(storeItems);
        localStorage.setItem("whistList", data);
    }
};


export {setWihetList,getWhistList}