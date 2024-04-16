import React, { useState } from "react";

const CalendarApp = () => {
  // State variables
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Function to update the selected month
  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  // Function to update the selected year
  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  // Function to navigate to the previous month
  const prevMonth = () => {
    setSelectedMonth((prev) => (prev === 1 ? 12 : prev - 1));
    setSelectedYear((prev) => (selectedMonth === 1 ? prev - 1 : prev));
  };

  // Function to navigate to the next month
  const nextMonth = () => {
    setSelectedMonth((prev) => (prev === 12 ? 1 : prev + 1));
    setSelectedYear((prev) => (selectedMonth === 12 ? prev + 1 : prev));
  };

  // Function to render days of the month
  const renderDaysOfMonth = () => {
    // Get the number of days in the selected month
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const days = [];

    // Create an array of days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<td key={i}>{i}</td>);
    }

    return days;
  };

  return (
    <div>
      <h1>Calendar</h1>
      <div>
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <input
          type="text"
          value={selectedYear}
          onChange={handleYearChange}
          onDoubleClick={(e) => e.target.select()}
        />
        <button onClick={prevMonth}>Prev</button>
        <button onClick={nextMonth}>Next</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>{renderDaysOfMonth()}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarApp;
