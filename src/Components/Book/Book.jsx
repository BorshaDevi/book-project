

import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {image,bookName,tags,rating,author,category,bookId} = book
    return (
        <div>
           <Link to={`/detail/${bookId}`}>
           <div className="card w-96 bg-base-100 shadow-xl space-y-5">
                
                <figure><img className="w-48 rounded" src={image}alt="book" /></figure>
                <div className="card-body">
                <div className="flex text-green-500 font-semibold ml-5  gap-5">
                                <h6>{tags[0]}</h6>
                                <h6>{tags[1]}</h6>
                            </div>
                <h2 className="card-title">{bookName}</h2>
                <p>By:<span className="text-black  text-xl">{author}</span></p>
                <hr />
                <div className="card-actions flex ">
                    <p>{category}</p>
                    <div className="flex">
                           <p className="mr-2">{rating}</p>
                           <IoMdStarOutline  className=" mt-1"/>
                          
                    </div>
                    
                </div>
                </div>
                </div>
           </Link>
        </div>
    );
};

export default Book;