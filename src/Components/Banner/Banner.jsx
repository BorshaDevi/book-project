

const Banner = () => {
    return (
        <div className="mt-10">
            <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse rounded p-10">
          <img src="https://i.ibb.co/5BgMb7x/english-books-blue-background.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
            
            <button className="btn bg-green-600 text-white mt-10">View The List</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;