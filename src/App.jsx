import Nav from "./component/Nav";
import "./App.css";
import Search from "./component/Search";
import { useState } from "react";
import FoodList from "./component/FoodList";

function App() {
  const [foodData, setFood] = useState([]);
  return (
    <div>
      <Nav />
      <Search setFood={setFood} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
