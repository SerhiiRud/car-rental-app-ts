import { TCar } from "./Car.type";
import { IFavoriteToggle } from "./Favorite.interface";

export type TFavoritesPage = {
  cars: TCar[];
  favoriteToggle: IFavoriteToggle;
};
