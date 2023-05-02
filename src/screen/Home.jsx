import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let res = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
    });
    res = await res.json();
    console.log(res[0]);
    setFoodItem(res[0]);
    setFoodCat(res[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-caption" style={{ zIndex: "12" }}>
              {" "}
              <div >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/1080x350/?burger"
                className="d-block w-100"
                style={{ filter: "brightness(45%)" }}
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/1080x350/?momos"
                className="d-block w-100"
                style={{ filter: "brightness(45%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/1080x350/?pastry"
                className="d-block w-100"
                style={{ filter: "brightness(45%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat?.map((data, i) => {
          return (
            <div className="row mb-3">
              <div className="fs-3 m-3" key={data._id}>
                {data.CategoryName}
              </div>
              <hr />
              {foodItem
                ?.filter(
                  (item) =>
                    item.CategoryName == data.CategoryName &&
                    item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((filteredItem) => {
                  return (
                    <div
                      key={filteredItem._id}
                      className="col-12 col-md-6 col-lg-3"
                    >
                      <Card
                      foodItem={filteredItem}
                        foodName={filteredItem.name}
                        options={filteredItem.options[0]}
                        imgSrc={filteredItem.img}
                      />
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
