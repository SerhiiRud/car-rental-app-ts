import FilterBar from "../../components/FilterBar/FilterBar";
import Gallery from "../../components/Gallery";
import { Container, Text } from "./Favorites.styled";
import { TFavoritesPage } from "../../interfaces/FavoritesPage.type";

const Favorites = ({ cars, favoriteToggle }: TFavoritesPage) => {
  //const [visibleCars, setVisibleCars] = useState<TCar[]>([]);

  const visibleCars = localStorage.getItem("favs")
    ? JSON.parse(localStorage.getItem("favs") || "{}")
    : [];

  return (
    <Container>
      <FilterBar cars={cars} />
      {visibleCars.length === 0 ? (
        <Text>You don't have favorite cars</Text>
      ) : (
        <Gallery
          cars={cars}
          visibleCars={visibleCars}
          setFavorite={favoriteToggle}
        />
      )}
    </Container>
  );
};

export default Favorites;
