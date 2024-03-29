import React, { useState } from "react";
import Calendar from "react-calendar";
import { IoIosCalendar } from "react-icons/io";
import "./MainDashCalendar.css";
import { format } from "date-fns";

const MainDashCalendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    if (!selectedStartDate || selectedEndDate !== null) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else {
      setSelectedEndDate(date);
      setShowCalendar(false);
    }
  };

  const formatDate = (date) => {
    return date instanceof Date && !isNaN(date.getTime())
      ? format(date, "MMM dd, yyyy")
      : "";
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 text-left px-3 text-sm text-gray-500 main-content w-full cursor-pointer">
        <span className="text-lg">
          <IoIosCalendar />
        </span>
        <div onClick={handleCalendarClick}>
          {`${formatDate(selectedStartDate)} - ${formatDate(selectedEndDate)}`}
        </div>
      </div>

      {showCalendar && (
        <div className="absolute z-10 top-12 -right-12">
          <Calendar
            onChange={handleDateChange}
            selectRange
            value={selectedStartDate && selectedEndDate}
            className="shadow-lg main-content border border-gray-300 rounded-md p-4 text-gray-500"
          />
        </div>
      )}
    </div>
  );
};

export default MainDashCalendar;
