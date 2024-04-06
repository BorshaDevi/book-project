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
   console.log(getWishs)
  useEffect(() =>{
          const getSet=JSON.parse(localStorage.getItem('book')) || [];
          setWishes(getSet)
  },[])
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read</Tab>
      <Tab>WishList</Tab>
    </TabList>
         <div className="">
         <TabPanel>
      <div>
        
      </div>
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

         </div>
    
  </Tabs>
        </div>
    );
};

export default ListedBook;