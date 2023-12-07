import { TCar } from "./Car.type";
import { IFavoriteToggle } from "./Favorite.interface";

export type TCatalog = {
  cars: TCar[];
  setCars: React.Dispatch<React.SetStateAction<TCar[]>>;
  favoriteToggle: IFavoriteToggle;
};
