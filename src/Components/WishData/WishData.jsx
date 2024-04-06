import { CiLocationOn } from "react-icons/ci";
import { PiAddressBook } from "react-icons/pi";
import { MdContactPage } from "react-icons/md";

const WishData = ({getwish}) => {
    const {image,bookName,author,rating,category,tags,publisher,yearOfPublishing,totalPages} =getwish
    return (
        <div>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row " >
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className="space-y-3">
      <h1 className="text-xl font-bold">{bookName}</h1>
      <p>By:{author}</p>
      <div className="flex space-x-10">
       <div className="flex space-x-10">
       <p><span className="font-bold">Tags:</span></p>
        <p className="text-green-500">   <span> #{tags[0]} </span></p>
        <p className="text-green-500"><span>#{tags[1]}</span></p>
       </div>
         <div className="flex gap-2">
         <CiLocationOn className="mt-1" />
        <p>Year of Publishing:{yearOfPublishing}</p>
         </div>
      </div>
      <div>
        <div className="flex gap-5">
              <div className="flex gap-2">
              <PiAddressBook className="mt-1" />
              <p>publisher:{publisher}</p>
              </div>
              <div className="flex gap-2">
              <MdContactPage className="mt-1" />
              <p>Pages:{totalPages}</p>
              </div>
        </div>
      </div>
      <hr />
     <div className="space-x-10">
        <button className="text-blue-500 bg-blue-200 rounded-full p-2">category:{category}</button>
        <button className="text-yellow-500 bg-yellow-100 rounded-full p-2">rating:{rating}</button>
     <button className="btn bg-green-700 text-white rounded-full ">View Detail</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default WishData;