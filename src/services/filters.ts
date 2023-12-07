import { TCar } from "../interfaces/Car.type";
export const makeSelection = (cars: TCar[]) =>
  cars
    .map((car) => car.make)
    .filter((value, index, self) => self.indexOf(value) === index);

export const priceSelection = (min: number, max: number, step: number) => {
  const priceChart = [];
  for (let i = min; i <= max; i += step) {
    priceChart.push(i);
  }
  return priceChart;
};
