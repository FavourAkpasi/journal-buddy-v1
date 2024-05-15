export const formatDateHelper = (dateString: string) => {
    const date = new Date(dateString);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = days[date.getDay()];
    const dateNum = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("en-US", { timeStyle: "short" }); // You can adjust locale as needed

    return `${day}, ${dateNum} ${monthName} ${year} at ${time}`;
  };