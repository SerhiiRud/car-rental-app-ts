import { TCar } from "./Car.type";
import { IFavoriteToggle } from "./Favorite.interface";

export type TGallery = {
  cars: TCar[];
  visibleCars: TCar[];
  setFavorite: IFavoriteToggle;
};
