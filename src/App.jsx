import { useState, useEffect } from "react";
import ResultList from "./components/ResultList";
import Form from "./components/Form";
import { useLocalStorage } from "./components/useLocalStorage";

export default function App() {
  const [carList, setCarList] = useLocalStorage([], "carList");
  function handleDeleteCar(id) {
    setCarList((prevList) => prevList.filter((car) => car.id !== id));
  }

  function handleAddNewcar(item) {
    setCarList((prevList) => [...prevList, item]);
  }

  // const [carList, setCarList] = useState(() => {
  //   const storedValue = localStorage.getItem("carList");
  //   return storedValue ? JSON.parse(storedValue) : [];
  // });

  // useEffect(
  //   function () {
  //     localStorage.setItem("carList", JSON.stringify(carList));
  //   },
  //   [carList]
  // );

  return (
    <div className="app-container">
      <h1>
        Car Lease <br /> Monthly Calculator
      </h1>

      <Form onAddNewcar={handleAddNewcar} />

      {carList.length > 0 && (
        <ResultList carList={carList} onDeleteCar={handleDeleteCar} />
      )}
    </div>
  );
}
