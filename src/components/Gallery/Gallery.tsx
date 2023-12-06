import CarCard from "../CarCard/CarCard";
import { Container } from "./Gallery.styled";
import { TGallery } from "../../interfaces/Gallery.type";

const Gallery = ({ cars, visibleCars, setFavorite }: TGallery) => {
  const carsToShow = visibleCars.filter(
    (obj, index) =>
      visibleCars.findIndex(
        (item) => item.location === obj.location && item.id === obj.id
      ) === index
  );

  return (
    <>
      <Container>
        {carsToShow.map((car) => (
          <li key={car.id}>
            <CarCard car={car} setFavorite={setFavorite} />
          </li>
        ))}
      </Container>
    </>
  );
};

export default Gallery;
