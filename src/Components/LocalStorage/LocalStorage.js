
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
        toast('You have all ready read this book')
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
         toast('You have all ready read this book')
     }
     else{
         saveObjects.push(single)
         const saveJson=JSON.stringify(saveObjects)
         localStorage.setItem('book',saveJson)
     }
 }



export{saveLocalStorage ,handleLocalStorage}
