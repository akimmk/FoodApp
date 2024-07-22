import Nav from "./component/Nav";
import "./App.css";
import Search from "./component/Search";
import { useState } from "react";
import FoodList from "./component/FoodList";
import Container from "./component/Container";
import FoodDetail from "./component/FoodDetail";
import InnerContainer from "./component/InnerContainer";
import OutreContainer from "./component/OuterContainer";

function App() {
  const [foodData, setFood] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div>
      <Nav />
      <Search setFood={setFood} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <OutreContainer>
          <FoodDetail foodId={foodId} />
        </OutreContainer>
      </Container>
    </div>
  );
}

export default App;
