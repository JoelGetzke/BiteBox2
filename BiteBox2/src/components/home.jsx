import React from 'react';

const Home = () => {
  return (
    <>
      <header>
        <h1 className="center-title">Welcome to BiteBox</h1>
      </header>
      <main>
        <p>Your content goes here.</p>
        <div className="parent-search">
          <form className="search-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="..." className="card-img-top" alt="Card" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;


