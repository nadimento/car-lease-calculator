import { useState } from "react";
import FormInput from "./FormInput";

export default function Form({ onAddNewcar }) {
  const [carType, setCarType] = useState("");
  const [leaseTerm, setLeaseTerm] = useState("");
  const [monthlyPayments, setMonthlyPayments] = useState("");
  const [insurance, setInsurance] = useState("");
  const [licenseRenewel, setLicenseRenewel] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [driveOff, setDriveOff] = useState("");
  const [downPayment, setDownPayment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !carType ||
      !leaseTerm ||
      !monthlyPayments ||
      !insurance ||
      !licenseRenewel ||
      !maintenance ||
      !driveOff ||
      downPayment < 0
    )
      return;

    const newItem = {
      id: crypto.randomUUID(),
      carType,
      leaseTerm,
      monthlyPayments,
      insurance,
      licenseRenewel,
      maintenance,
      driveOff,
      downPayment,
    };

    onAddNewcar(newItem);

    setCarType("");
    setLeaseTerm("");
    setMonthlyPayments("");
    setInsurance("");
    setLicenseRenewel("");
    setMaintenance("");
    setDriveOff("");
    setDownPayment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        id="car-type"
        text="Name of Car"
        placeHolder="Make and Model of Car"
        value={carType}
        handleChange={setCarType}
      />

      <FormInput
        type="number"
        number="number"
        id="lease-term"
        text="Lease Term"
        placeHolder="# of months"
        value={leaseTerm}
        handleChange={setLeaseTerm}
      />

      <FormInput
        type="number"
        id="monthly-payment"
        text="Payment - Monthly"
        placeHolder="Amount"
        value={monthlyPayments}
        handleChange={setMonthlyPayments}
      />

      <FormInput
        type="number"
        id="monthly-insurance"
        text="Insurance - Monthly"
        placeHolder="Amount"
        value={insurance}
        handleChange={setInsurance}
      />

      <FormInput
        type="number"
        id="license-renewal"
        text="License Renewal - Yearly"
        placeHolder="Amount"
        value={licenseRenewel}
        handleChange={setLicenseRenewel}
      />

      <FormInput
        type="number"
        id="maintenance"
        text="Maintenance - Yearly"
        placeHolder="Amount"
        value={maintenance}
        handleChange={setMaintenance}
      />

      <FormInput
        type="number"
        id="driveoff"
        text="Drive Off"
        placeHolder="Amount"
        value={driveOff}
        handleChange={setDriveOff}
      />

      <FormInput
        type="number"
        id="downpayment"
        text="Downpayment"
        placeHolder="Amount"
        value={downPayment}
        handleChange={setDownPayment}
      />

      <button className="btn btn-submit">Submit</button>
    </form>
  );
}

//   {/* <label htmlFor="car-type">Lease Term</label>
//   <input id="car-type" type="text" placeholder="Make and Model of Car" />

//   <label htmlFor="car-type">Payments - Monthly</label>
//   <input id="car-type" type="text" placeholder="Make and Model of Car" />

//   <label htmlFor="car-type">Insurance - Monthly</label>
//   <input id="car-type" type="text" placeholder="Make and Model of Car" />

//   <label htmlFor="car-type">License Renewal - Yearly</label>
//   <input id="car-type" type="text" placeholder="Make and Model of Car" />

//   <label htmlFor="car-type">Maintenance - Yearly</label>
//   <input id="car-type" type="text" placeholder="Make and Model of Car" />

//   <label htmlFor="car-type">Drive Off</label>
//   <input id="car-type" type="text" placeholder="Make and Model of Car" />

//   <label htmlFor="car-type">Down Payment</label>
//   <input id="car-type" type="text" placeholder="Make and Model of Car" /> */}
