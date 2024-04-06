import { ToastContainer, toast } from 'react-toastify';


const saveLocalStorage=(single)=>{
    console.log(single)
        const getLocalDatas= JSON.parse(localStorage.getItem("books")) || []
        const savelocal =getLocalDatas.find(getLocalData => getLocalData.bookId == single.bookId)
        if(savelocal){
           toast('wow')
        }
        else{
            getLocalDatas.push(single)
            const setLocal=JSON.stringify(getLocalDatas)
            localStorage.setItem('books',setLocal)
        }
       
       
}
export{saveLocalStorage}