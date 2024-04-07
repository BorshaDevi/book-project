import { useEffect, useState } from "react";
import AllBook from "../AllBook/AllBook";
import WishData from "../WishData/WishData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListedBook = () => {
  const [getDatas,setGetDatas] =useState([])
   console.log(getDatas)
  useEffect(() =>{
          const getItem=JSON.parse(localStorage.getItem('books')) || [];
          setGetDatas(getItem)
  },[])
  const [getWishs,setWishes] =useState([])
   
  useEffect(() =>{
          const getSet=JSON.parse(localStorage.getItem('book')) || [];
          setWishes(getSet)
  },[])


    return (
      <>
      <div className="text-center mt-5 bg-slate-300 p-5 rounded">
        <h1 className="font-bold">Book</h1>
      </div>
      <div className="text-center mt-5">
      <select className="select select-info w-full max-w-xs bg-green-600 text-white">
  <option disabled selected>Sort by</option>
  <option >Rating</option>
  <option>Number of Pages</option>
  <option>Publisher year</option>
</select>
</div>
     
<div>
     <Tabs>       
    <TabList>
      <Tab>Read</Tab>
      <Tab>WishList</Tab>
    </TabList>
         <TabPanel>
           <div className="grid grid-cols-1 gap-5">
           {
                getDatas.map(getData => <AllBook key={getData.bookId} allbook={getData}></AllBook> )
            }
           </div>
     </TabPanel>
      <TabPanel>
           <div className="grid grid-cols-1 gap-5">
               {
                getWishs.map(getWish => <WishData key={getWish.bookId} getwish={getWish}></WishData> )
               }
           </div> 
      </TabPanel>
       </Tabs>
       </div>
       </>
    );
};
export default ListedBook;