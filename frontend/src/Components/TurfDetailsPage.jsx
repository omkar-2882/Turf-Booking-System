import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./TurfDetailsPage.css";

import Dialog from "@material-ui/core/Dialog";
import Navbar from "./Navbar";

const MyComponent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickSubmit = () => {
    setOpenDialog(true);
  };

  const handleConfirm = () => {
    // Perform submit action or make an API call
    setOpenDialog(false);
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <button onClick={handleClickSubmit}>Submit</button>

      <Dialog open={openDialog} onClose={handleCancel}>
        <div>
          <h2>Confirmation</h2>
          <p>Are you sure you want to submit?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      </Dialog>
    </div>
  );
};

function TurfDetailsPage(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const turf = {
    name: "Turf A",
    address: "123 Street, City",
    timings: "9:00 AM - 7:00 PM",
    size: "40x60 meters",
  };

  const selectedTurf = {
    name: "Turf A",
    address: "123 Street, City",
    timings: "9:00 AM - 7:00 PM",
    size: "40x60 meters",
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post("/api/razorpay/checkout", {
        amount: 1000, // Set the amount as per your requirement
      });

      const options = {
        key: response.data.key,
        amount: response.data.amount,
        currency: response.data.currency,
        name: "Turf Booking",
        description: "Book your turf",
        order_id: response.data.id,
        handler: function (response) {
          // Handle the success callback
          console.log("Payment Success:", response);
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "+1234567890",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <>
      <Navbar isLogin={true} user={props.user}/>
      <div className="details">
        <div className="turf-details-page">
          <h2>{turf.name}</h2>
          <p>
            <span>
              <b>Address: </b>
            </span>{" "}
            {turf.address}
          </p>
          <p>
            <span>
              <b>Timings: </b>
            </span>
            Timings: {turf.timings}
          </p>
          <p>
            <span>
              <b>Size: </b>
            </span>
            Size: {turf.size}
          </p>

          <h3>Select Booking Date and Time</h3>
          <div className="booking-form">
            <div className="datecontent"></div>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
            />
            <select value={selectedTime} onChange={handleTimeChange}>
              <option value="">Select Time</option>
              <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
              <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
              <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
            </select>
          </div>

          <button className="book-now-btn" onClick={handlePayment}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

export default TurfDetailsPage;
