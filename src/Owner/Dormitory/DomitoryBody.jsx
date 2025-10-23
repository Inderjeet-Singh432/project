// export default function DomitoryBody(){
//     return(
//         <>
// <section id="about" className="about section">
//     <div className="container">
//       <div className="row gy-4">
        
//         <h1>DomitoryBody</h1>


//              </div>
//     </div>
    
// </section>

// <footer id="footer" className="footer dark-background">
//     <div className="container footer-top">
//       <div className="row gy-4">
//         <div className="col-lg-4 col-md-6 footer-about">
//           <a href="index.html" className="logo d-flex align-items-center">
//             <span className="sitename">Dewi</span>
//           </a>
//           <div className="footer-contact pt-3">
//             <p>A108 Adam Street</p>
//             <p>New York, NY 535022</p>
//             <p className="mt-3">
//               <strong>Phone:</strong> <span>+1 5589 55488 55</span>
//             </p>
//             <p>
//               <strong>Email:</strong> <span>info@example.com</span>
//             </p>
//           </div>
//           <div className="social-links d-flex mt-4">
//             <a href="">
//               <i className="bi bi-twitter-x" />
//             </a>
//             <a href="">
//               <i className="bi bi-facebook" />
//             </a>
//             <a href="">
//               <i className="bi bi-instagram" />
//             </a>
//             <a href="">
//               <i className="bi bi-linkedin" />
//             </a>
//           </div>
//         </div>
//         <div className="col-lg-2 col-md-3 footer-links">
//           <h4>Useful Links</h4>
//           <ul>
//             <li>
//               <i className="bi bi-chevron-right" /> <a href="#">Home</a>
//             </li>
//             <li>
//               <i className="bi bi-chevron-right" /> <a href="#">About us</a>
//             </li>
//             <li>
//               <i className="bi bi-chevron-right" /> <a href="#">Services</a>
//             </li>
//             <li>
//               <i className="bi bi-chevron-right" />{" "}
//               <a href="#">Terms of service</a>
//             </li>
//             <li>
//               <i className="bi bi-chevron-right" />{" "}
//               <a href="#">Privacy policy</a>
//             </li>
//           </ul>
//         </div>
//         <div className="col-lg-2 col-md-3 footer-links">
//           <h4>Our Services</h4>
//           <ul>
//             <li>
//               <i className="bi bi-chevron-right" /> <a href="#">Web Design</a>
//             </li>
//             <li>
//               <i className="bi bi-chevron-right" />{" "}
//               <a href="#">Web Development</a>
//             </li>
//             <li>
//               <i className="bi bi-chevron-right" />{" "}
//               <a href="#">Product Management</a>
//             </li>
//             <li>
//               <i className="bi bi-chevron-right" /> <a href="#">Marketing</a>
//             </li>
//             <li>
//               <i className="bi bi-chevron-right" />{" "}
//               <a href="#">Graphic Design</a>
//             </li>
//           </ul>
//         </div>
//         <div className="col-lg-4 col-md-12 footer-newsletter">
//           <h4>Our Newsletter</h4>
//           <p>
//             Subscribe to our newsletter and receive the latest news about our
//             products and services!
//           </p>
//           <form
//             action="forms/newsletter.php"
//             method="post"
//             className="php-email-form"
//           >
//             <div className="newsletter-form">
//               <input type="email" name="email" />
//               <input type="submit" defaultValue="Subscribe" />
//             </div>
//             <div className="loading">Loading</div>
//             <div className="error-message" />
//             <div className="sent-message">
//               Your subscription request has been sent. Thank you!
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     <div className="container copyright text-center mt-4">
//       <p>
//         © <span>Copyright</span> <strong className="px-1 sitename">Dewi</strong>{" "}
//         <span>All Rights Reserved</span>
//       </p>
//       <div className="credits">
//         {/* All the links in the footer should remain intact. */}
//         {/* You can delete the links only if you've purchased the pro version. */}
//         {/* Licensing information: https://bootstrapmade.com/license/ */}
//         {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
//         Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
//         Distributed by <a href="“https://themewagon.com">ThemeWagon</a>
//       </div>
//       <a href="“https://themewagon.com"></a>
//     </div>
//     <a href="“https://themewagon.com"></a>
//   </footer>
//         </>
//     )
// }



import React, { useState, useMemo, useCallback } from 'react';

const formatDate = (date) => date ? date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) : 'Select Date';

// Helper function to check if a date is within the booking range (exclusive of check-out)
const isDateInRange = (date, checkIn, checkOut) => {
    if (!checkIn || !checkOut) return false;
    const time = date.getTime();
    return time > checkIn.getTime() && time < checkOut.getTime();
};

// --- Calendar Component ---

const Calendar = ({ month, year, checkInDate, checkOutDate, onDateClick }) => {
    const today = useMemo(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }, []);

    const date = new Date(year, month);
    const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)

    const dayCells = [];
    
    // Add leading blank cells
    for (let i = 0; i < firstDay; i++) {
        dayCells.push(<div key={`blank-${i}`} className="day-cell blank"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month, day);
        currentDate.setHours(0, 0, 0, 0);

        let classes = 'day-cell';
        let isDisabled = currentDate < today;
        let isSelected = false;

        // Check for selection and range
        if (checkInDate && currentDate.getTime() === checkInDate.getTime()) {
            isSelected = true;
            classes += ' selected check-in';
        } else if (checkOutDate && currentDate.getTime() === checkOutDate.getTime()) {
            isSelected = true;
            classes += ' selected check-out';
        } else if (isDateInRange(currentDate, checkInDate, checkOutDate)) {
            classes += ' in-range';
        }

        // Check for today
        if (currentDate.getTime() === today.getTime()) {
            classes += ' today';
        }
        
        // Check for disabled dates
        if (isDisabled) {
            classes += ' disabled';
        }

        dayCells.push(
            <div
                key={day}
                className={classes}
                onClick={() => !isDisabled && onDateClick(currentDate)}
            >
                {day}
            </div>
        );
    }

    return (
        <div className="calendar">
            <div className="calendar-header">
                <span>{monthName}</span>
            </div>
            <div className="calendar-grid">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(name => (
                    <div key={name} className="day-name">{name}</div>
                ))}
                {dayCells}
            </div>
        </div>
    );
};

// --- Main Booking Calendar Component ---

const BookingCalendar = () => {
    // State for selected dates
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    
    // State for calendar navigation
    const [displayMonth, setDisplayMonth] = useState(new Date().getMonth());
    const [displayYear, setDisplayYear] = useState(new Date().getFullYear());

    // Helper to advance the calendar view
    const navigateMonth = useCallback((delta) => {
        const newDate = new Date(displayYear, displayMonth + delta);
        setDisplayMonth(newDate.getMonth());
        setDisplayYear(newDate.getFullYear());
    }, [displayMonth, displayYear]);

    const handleDateClick = useCallback((date) => {
        // Logic for Check-in / Check-out selection
        if (!checkInDate || (checkInDate && checkOutDate) || date.getTime() < checkInDate.getTime()) {
            // Case 1: Start a new booking, reset, or selected date is before check-in
            setCheckInDate(date);
            setCheckOutDate(null);
        } else if (date.getTime() > checkInDate.getTime()) {
            // Case 2: Set check-out
            setCheckOutDate(date);
            
            // 💡 TO DO: Call API here to fetch rates/availability for the range
            // console.log("Booking selected:", formatDate(checkInDate), "to", formatDate(date));
        }
    }, [checkInDate, checkOutDate]);

    // Calculate the next month's display
    const nextMonthDate = new Date(displayYear, displayMonth + 1);
    const nextMonth = nextMonthDate.getMonth();
    const nextYear = nextMonthDate.getFullYear();

    // Check if the current month is the actual current month (to disable "Prev")
    const isCurrentMonth = displayMonth === new Date().getMonth() && displayYear === new Date().getFullYear();

    return (
       <>
        <div className="calendar-container">
           
            <div className="date-display">
                <div id="checkInDisplay">Check-in: **{formatDate(checkInDate)}**</div>
                <div id="checkOutDisplay">Check-out: **{formatDate(checkOutDate)}**</div>
            </div>

            <div className="calendar-navigation">
                <button 
                    onClick={() => navigateMonth(-1)} 
                    disabled={isCurrentMonth}
                >
                    &lt; Prev
                </button>
                <button onClick={() => navigateMonth(1)}>
                    Next &gt;
                </button>
            </div>

            <div className="calendars-wrapper">
                <Calendar 
                    month={displayMonth} 
                    year={displayYear} 
                    checkInDate={checkInDate} 
                    checkOutDate={checkOutDate} 
                    onDateClick={handleDateClick} 
                />
                <Calendar 
                    month={nextMonth} 
                    year={nextYear} 
                    checkInDate={checkInDate} 
                    checkOutDate={checkOutDate} 
                    onDateClick={handleDateClick} 
                />
            </div>
            
            {checkInDate && checkOutDate && (
                <div className="booking-summary">
                    <p>Total nights: {Math.round((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))} nights</p>
                    <button className="book-button" disabled>Proceed to Booking (Requires Backend)</button>
                </div>
            )}
            
        </div>


  <footer id="footer" className="footer dark-background">
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span className="sitename">Dewi</span>
          </a>
          <div className="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p className="mt-3">
              <strong>Phone:</strong> <span>+1 5589 55488 55</span>
            </p>
            <p>
              <strong>Email:</strong> <span>info@example.com</span>
            </p>
          </div>
          <div className="social-links d-flex mt-4">
            <a href="">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="">
              <i className="bi bi-facebook" />
            </a>
            <a href="">
              <i className="bi bi-instagram" />
            </a>
            <a href="">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">Home</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">About us</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">Services</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Terms of service</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">Web Design</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Web Development</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Product Management</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" /> <a href="#">Marketing</a>
            </li>
            <li>
              <i className="bi bi-chevron-right" />{" "}
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>
          <form
            action="forms/newsletter.php"
            method="post"
            className="php-email-form"
          >
            <div className="newsletter-form">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </div>
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your subscription request has been sent. Thank you!
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="container copyright text-center mt-4">
      <p>
        © <span>Copyright</span> <strong className="px-1 sitename">Dewi</strong>{" "}
        <span>All Rights Reserved</span>
      </p>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
        Distributed by <a href="“https://themewagon.com">ThemeWagon</a>
      </div>
      <a href="“https://themewagon.com"></a>
    </div>
    <a href="“https://themewagon.com"></a>
  </footer>
 
       </>
        
    );
};

export default BookingCalendar;