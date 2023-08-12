import React from "react";

const HomePage = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          className="image"
          src="https://img.freepik.com/free-vector/banner-online-black-friday-sale-with-smarthphone_125540-264.jpg?w=1060&t=st=1690969671~exp=1690970271~hmac=012d1d17dde098eeaa81f382b5b759427fca41631d515ce00fdf81c78d348046"
          alt="logo"
        />
      </div>
      <div className="text-container">
        <div className="text-overlay">
          <h1>Welcome to Redux-Cart</h1>
          <p>Explore and Enjoy!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
