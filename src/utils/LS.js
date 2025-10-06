import { toast } from "react-toastify";

const getLSData = () => {
    const readData = localStorage.getItem('readList');
    if(readData){
        const data = JSON.parse(readData);
        return data;
    }
    else{
        return [];
    }
}

const setLSData = (id) => {
    const isStore = getLSData();

    if(isStore.includes(id)){
        toast.warn('Already Exist');
    }
    else{
        isStore.push(id);
        const str = JSON.stringify(isStore);
        localStorage.setItem('readList', str);
        toast.info('Successfully added to reading list')
    }
}

export {setLSData};