const Home = () => {
  return (
    <div>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-5">
        {/* cards  */}
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <figure className="px-10 pt-10">
            <img
              src="/src/assets/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <figure className="px-10 pt-10">
            <img
              src="/src/assets/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <figure className="px-10 pt-10">
            <img
              src="/src/assets/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* other codes */}
      </div>
    <div>
      
    </div>
    </div>
  );
};

export default Home;
