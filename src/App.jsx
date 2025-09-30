import { useState } from "react";
import "./App.css";
import Tour from "./Tour";
import { info } from "./info.js";
function App() {
  const [tours, setTours] = useState(info);
  const deleteTour = (id) => {
    setTours((prev) => {
      return prev.filter((tour) => tour.id !== id);
    });
  };
  return (
    <>
      <ul className="list">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} onDelete={deleteTour} />;
        })}
      </ul>
    </>
  );
}

export default App;
