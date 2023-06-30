import React from "react";
import "./MainContent.css";
import Navbar from "./Navbar";
import footballImage from "./football.jpg";
import basketballImage from "./basketball.jpg";
import volleyballImage from "./volleyball.jpg";

function MainContent(props) {
  // Generate random turf names and prices
  const generateRandomTurfData = () => {
    const turfs = [
      { name: "Football", price: "Rs200/hour", image: footballImage },
      { name: "Basketball", price: "Rs300/hour", image: basketballImage },
      { name: "Volleyball", price: "Rs500/hour", image: volleyballImage },
      // Add more turf data with image URLs
    ];

    const randomTurfs = [];

    for (let i = 0; i < 9; i++) {
      const randomIndex = Math.floor(Math.random() * turfs.length);
      const randomTurf = turfs[randomIndex];
      randomTurfs.push(randomTurf);
    }

    return randomTurfs;
  };

  const randomTurfs = generateRandomTurfData();
  return (
    <>
      <Navbar isLogin={true} user={props.user}/>
      <main className="main-content">
        <div>
          <div className="head">
            <h1>Book Your Slots</h1>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </div>
        <div>
          <h3>Featured Listing</h3>
          <div className="random-turfs">
            {randomTurfs.map((turf, index) => (
              <div key={index} className="turf-container" style={{ backgroundImage: `url(${turf.image})` }}>
                {/* <img src={turf.image} alt={turf.name} /> */}
                <div className="turf-details">
                  <h4>{turf.name}</h4>
                  <p>{turf.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="listing">
            <div>
              <h4>NHGSA, Grant road - SPORT-KING</h4>
              <p>NHGSA, Grant road - BY SPORT-KING</p>
              <p>Mumbai</p>
              <button>BOOK NOW</button>
            </div>
            {/* Add more listing items here */}
          </div>
        </div>
        <div>
          <h3>Popular Localities</h3>
          <div className="localities">
            <div>
              <h4>Andheri (13 Places)</h4>
            </div>
            {/* Add more locality items here */}
          </div>
        </div>
        <div>
          <h3>Come, Let's Pay...</h3>
          <p>
            When you book your ground online with us, you get to pay with credit
            card, debit card, net banking, or with digital wallets too...
          </p>
          <p>Looking for discounts & offers on your ground bookings?</p>
        </div>
        <div>
          <h3>Confirmed Bookings</h3>
          <h3>Convenient Process</h3>
          <h3>Cashless Payments</h3>
        </div>
        <div>
          <h3>List your ground with us</h3>
          <p>List with a few clicks and start taking bookings online</p>
          <div>
            <ul>
              <li>Booking Online</li>
              <li>Slider End To End Management</li>
              <li>Less Cancellation</li>
              <li>Invoicing</li>
              <li>Ancillary Services</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Cities</h3>
          <ul>
            <li>Ahmedabad</li>
            <li>Baroda</li>
            <li>Bengaluru</li>
            <li>Chandigarh</li>
            <li>Chennai</li>
            {/* Add more cities here */}
          </ul>
        </div>
      </main>
    </>
  );
}

export default MainContent;

