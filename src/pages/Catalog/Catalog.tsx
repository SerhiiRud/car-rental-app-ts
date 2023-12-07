import { useEffect, useState } from "react";
import { fetchAPI, limit } from "../../services/API";
import FilterBar from "../../components/FilterBar/FilterBar";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import { Container, Button } from "./Catalog.styled";
import { TCatalog } from "../../interfaces/Catalog.type";
import { TCar } from "../../interfaces/Car.type";

const Catalog = ({ cars, setCars, favoriteToggle }: TCatalog) => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCars, setVisibleCars] = useState<TCar[]>([]);

  const ERROR_MSG = "Error happend";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const favoriteCars = localStorage.getItem("favs")
          ? JSON.parse(localStorage.getItem("favs") || "{}").map(
              (fav: TCar) => fav.id
            )
          : [];
        const res = await fetchAPI(page);
        const favoritedCars = res.data.map((car: TCar) => ({
          ...car,
          favorite: favoriteCars.includes(car.id) ? true : false,
        }));

        setCars((prev) => [...prev, ...favoritedCars]);
      } catch (error) {
        if (error instanceof Error) setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, setCars]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <div>Error happend</div>}
      <FilterBar cars={cars} setVisibleCars={setVisibleCars} />
      <Gallery
        cars={cars}
        setFavorite={favoriteToggle}
        visibleCars={visibleCars}
      />
      {cars.length > 0 && cars.length % limit === 0 && (
        <Button
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </Button>
      )}
    </Container>
  );
};

export default Catalog;
