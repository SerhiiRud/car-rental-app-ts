import { TCar } from "./Car.type";

export type TFilterBar = {
  setVisibleCars: React.Dispatch<React.SetStateAction<TCar[]>>;
  cars: TCar[];
};
