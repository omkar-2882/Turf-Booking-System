import React from "react";
import "./MainContent.css";
import Navbar from "./Navbar";

function MainContent() {
  // Generate random turf names and prices
  const generateRandomTurfData = () => {
    const turfs = [
      { name: "Turf A", price: "$20/hour" },
      { name: "Turf B", price: "$25/hour" },
      { name: "Turf C", price: "$18/hour" },
      { name: "Turf D", price: "$22/hour" },
      { name: "Turf E", price: "$30/hour" },
      { name: "Turf F", price: "$15/hour" },
      { name: "Turf G", price: "$28/hour" },
      { name: "Turf H", price: "$19/hour" },
      { name: "Turf I", price: "$24/hour" },
      { name: "Turf J", price: "$26/hour" },
    ];

    const randomTurfs = [];

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * turfs.length);
      const randomTurf = turfs[randomIndex];
      randomTurfs.push(randomTurf);
    }

    return randomTurfs;
  };

  const randomTurfs = generateRandomTurfData();
  return (
    <>
      {/* <Navbar /> */}
      <main className="main-content">
        <div>
          <h2>
            Search for the best turf grounds, indoor courts & gymkhana grounds
            in your city
          </h2>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </div>
        <div>
          <h3>Featured Listing</h3>
          <div className="random-turfs">
            {randomTurfs.map((turf, index) => (
              <div key={index} className="turf-container">
                <h4>{turf.name}</h4>
                <p>{turf.price}</p>
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
