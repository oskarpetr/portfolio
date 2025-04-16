import { useEffect, useState } from "react";

export default function usePragueTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { timeZone: "Europe/Prague" };
  const pragueTime = new Date(now.toLocaleString("en-US", options));

  let hours = pragueTime.getHours();
  const minutes = pragueTime.getMinutes();
  const seconds = pragueTime.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const formattedTime =
    [
      hours,
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":") +
    " " +
    ampm;

  return formattedTime;
}
