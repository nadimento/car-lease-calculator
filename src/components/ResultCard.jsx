import React from "react";

export default function ResultCard({ car, monthlyPayment, onDeleteCar }) {
  return (
    <div className="result-card">
      <button className="btn-delete" onClick={() => onDeleteCar(car.id)}>
        X
      </button>
      <h2>{car.carType}</h2>
      <p>Lease Term: {car.leaseTerm} Months</p>
      <button className="btn btn-result">{`$${monthlyPayment} / Monthly`}</button>
    </div>
  );
}
