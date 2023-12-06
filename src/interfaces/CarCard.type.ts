import { TCar } from "./Car.type";
import { IFavoriteToggle } from "./Favorite.interface";

export type TCarCard = {
  car: TCar;
  setFavorite: IFavoriteToggle;
};
