
const storeBook = () => {

    const storeBookSTR = localStorage.getItem("readList");
    
    if(storeBookSTR){
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    }
    else{
        return [];
    }

}


const addToStoreDB = (id) => {
    
    const storeBookData = storeBook();
     
    if(storeBookData.includes(id)) {
        alert('This book already exist to your read books list')
    }
    
    else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList", data)
    }

}

export {addToStoreDB, storeBook} ;