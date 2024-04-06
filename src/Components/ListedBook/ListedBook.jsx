import { useEffect, useState } from "react";


const ListedBook = () => {
  const [getDatas,setGetDatas] =useState([])
  const [book,setBook] =useState({})
  getDatas.map(getData => setBook(getData))
   console.log(book)
  useEffect(() =>{
          const getItem=JSON.parse(localStorage.getItem('books')) || [];
          setGetDatas(getItem)
  },[])
    return (
        <div>
            {/* {
                getDatas.map(getData => )
            } */}
        </div>
    );
};

export default ListedBook;