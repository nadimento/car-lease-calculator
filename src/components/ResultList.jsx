import ResultCard from "./ResultCard";

export default function ResultList({ carList, onDeleteCar }) {
  return (
    <>
      {carList.map((car) => {
        const totalMonthlyPayments = car.monthlyPayments * car.leaseTerm;
        const totalInsurancepayments = car.insurance * car.leaseTerm;
        const totalLicenseRenewel = (car.licenseRenewel / 12) * car.leaseTerm;
        const totalMaintenance = (car.maintenance / 12) * car.leaseTerm;

        const finalMonthlyPayment =
          Math.round(
            ((totalMonthlyPayments +
              totalInsurancepayments +
              totalLicenseRenewel +
              totalMaintenance) /
              car.leaseTerm) *
              100
          ) / 100;

        return (
          <ResultCard
            key={car.id}
            car={car}
            monthlyPayment={finalMonthlyPayment}
            onDeleteCar={onDeleteCar}
          />
        );
      })}
    </>
  );
}
