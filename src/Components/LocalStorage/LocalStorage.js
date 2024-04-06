// import { ToastContainer, toast } from 'react-toastify';


// const saveLocalStorage=(single)=>{
//     console.log(single)
//         const getLocalDatas= JSON.parse(localStorage.getItem("books")) || []
//         const savelocal =getLocalDatas.find(getLocalData => getLocalData.bookId == single.bookId)
//         if(savelocal){
//            toast('wow')
//         }
//         else{
//             getLocalDatas.push(single)
//             const setLocal=JSON.stringify(getLocalDatas)
//             localStorage.setItem('books',setLocal)
//         }
       
       
// }
// export{saveLocalStorage}
import { ToastContainer, toast } from 'react-toastify';
const saveLocal=()=>{
   const getObject=localStorage.getItem('books') 
   if(getObject){
      return JSON.parse(getObject)
   }
   return []
        
}
const saveLocalStorage=(single) =>{
    const saveObjects=saveLocal()
    const exjest = saveObjects.find(saveObject => saveObject.bookId == single.bookId)
    if(exjest){
        toast('Book are all ready read')
    }
    else{
        saveObjects.push(single)
        const saveJson=JSON.stringify(saveObjects)
        localStorage.setItem('books',saveJson)
    }
}











const handleLocal=()=>{
    const getObject=localStorage.getItem('book') 
    if(getObject){
       return JSON.parse(getObject)
    }
    return []
         
 }
 const handleLocalStorage=(single) =>{
     const saveObjects=handleLocal()
     const exjest = saveObjects.find(saveObject => saveObject.bookId == single.bookId)
     if(exjest){
         toast('Book are all ready read')
     }
     else{
         saveObjects.push(single)
         const saveJson=JSON.stringify(saveObjects)
         localStorage.setItem('book',saveJson)
     }
 }



export{saveLocalStorage ,handleLocalStorage}
