import {useLoaderData,useParams} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleLocalStorage, saveLocalStorage } from "../LocalStorage/LocalStorage";




const Details = () => {
    const details=useLoaderData()
    const {detailId} =useParams()
    const single=details.find(detail => detail.bookId=== detailId)
    const {image,bookName,author,review,category,tags,publisher,yearOfPublishing,totalPages,rating} =single


    const notify = () =>{
        saveLocalStorage(single)
        toast('Thank you for reading')
    } 
    const handleWish=()=>{
      handleLocalStorage(single)
      toast('Thank you for your wishes')

    }
    
  
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p>{author}</p>
      <hr />
      <p>{category}</p>
      <hr/>
      <p className="py-6"><span className="font-semibold">Review:</span>{review}</p>
     <div className="flex">
     <p>Tags :  #{tags[0]}   #{tags[1]}</p>
     </div>
     <div className="mt-5">  
     <hr />
        <ul>
            <li>Page reads:{totalPages}</li>
            <li>publisher:{publisher}</li>
            <li>year of Publishing:{yearOfPublishing}</li>
            <li>Rating:{rating}</li>
        </ul>
     </div>
      <div className=" mt-5">
      <button  onClick={notify}className="btn  text-green-500">Read</button>
      <button  onClick={handleWish} className="btn btn-primary ml-5">Wishlist</button>
      </div>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
        
    );
};


export default Details;