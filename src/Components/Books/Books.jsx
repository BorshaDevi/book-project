import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
  const [books, setBooks] = useState([]) 
  useEffect(() => {
     fetch('book.json')
     .then(res => res.json())
     .then(data =>setBooks(data))
  },[])
   
    return (
        <div className="mt-10">
            <h2 className="text-center font-bold text-xl">Books</h2>
            <div className="grid md:grid-cols-3 gap-14 rounded-xl mt-5">
                {
                    books.map((book) => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;