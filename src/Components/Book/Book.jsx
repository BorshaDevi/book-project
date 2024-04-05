



const Book = ({book}) => {
    const {image,bookName,tags,rating,author,category} = book
    return (
        <div>
            <img src={image}></img>
        </div>
    );
};

export default Book;