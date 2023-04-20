import { useState, useEffect } from "react";

const Bookings = ({ booking }) => {

  return (
    <div class=" absolute right-80 top-2 p-8 md:w-32 lg:w-48 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ booking.experienceTitle }</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
        <ul>
            
        </ul>
    </p>
    </div>
  );
};

const BookingDetails = () => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("/api/bookings");
      const json = await response.json();

      if (response.ok) {
        setBookings(json);
        console.log(bookings)
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bookings">
      {bookings &&
        bookings.map((booking) => (
          <Bookings booking={booking} key={booking._id} />
        ))}
    </div>
  );
};

export default BookingDetails;
