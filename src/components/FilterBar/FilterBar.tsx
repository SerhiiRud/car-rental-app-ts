import { useEffect, useState } from "react";
import { makeSelection, priceSelection } from "../../services/filters";
import icon from "../../images/svg/sprite.svg";
import {
  Container,
  Form,
  Select,
  SelectContainer,
  Label,
  InputWrapper,
  Input,
  SearchButton,
} from "./FilterBar.styled";
import { TFilterBar } from "../../interfaces/FilterBar.type";

const MAXPRICE = 500;
const MAXMILEAGE = 1000000;

const FilterBar = ({ setVisibleCars, cars }: TFilterBar) => {
  const [brandSelectOpen, setBrandSelectOpen] = useState(false);
  const [priceSelectOpen, setPriceSelectOpen] = useState(false);

  const handleBrandSelectFocus = () => {
    setBrandSelectOpen(true);
  };

  const handleBrandSelectChange = () => {
    setBrandSelectOpen(false);
  };

  const handlePriceSelectFocus = () => {
    setPriceSelectOpen(true);
  };

  const handlePriceSelectChange = () => {
    setPriceSelectOpen(false);
  };

  const handleSearch = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const filterForm = evt.target as HTMLFormElement;
    const makeSearch =
      filterForm.make.value === "All" ? "" : filterForm.make.value;

    const priceSearch =
      filterForm.price.value === "All"
        ? MAXPRICE
        : Number(filterForm.price.value);

    const mileageFrom =
      filterForm.mileageFrom.value.length === 0
        ? 0
        : Number(filterForm.mileageFrom.value);

    const mileageTo =
      filterForm.mileageTo.value.length === 0
        ? MAXMILEAGE
        : Number(filterForm.mileageTo.value);

    const carsToShow = cars.filter(
      (car) =>
        car.make.toLowerCase().indexOf(makeSearch.toLowerCase()) !== -1 &&
        Number(car.rentalPrice.slice(1)) <= priceSearch &&
        car.mileage >= mileageFrom &&
        car.mileage <= mileageTo
    );

    setVisibleCars(carsToShow);
  };

  useEffect(() => {
    setVisibleCars(cars);
  }, [cars, setVisibleCars]);

  return (
    <Container>
      <Form
        onSubmit={(evt) => {
          handleSearch(evt);
        }}
      >
        <SelectContainer>
          <Label>
            Car brand
            <Select
              id="make"
              onFocus={handleBrandSelectFocus}
              onBlur={handleBrandSelectChange}
              onChange={handleBrandSelectChange}
            >
              <option defaultValue="All">All</option>
              {makeSelection(cars).map((make: string) => (
                <option value={make} key={make}>
                  {make}
                </option>
              ))}
            </Select>
          </Label>
          <svg className="icon">
            <use
              href={`${icon}${
                brandSelectOpen ? "#icon-chevron-top" : "#icon-chevron-down"
              }`}
            ></use>
          </svg>
        </SelectContainer>
        <SelectContainer>
          <Label>
            Price/ 1 hour
            <Select
              id="price"
              onFocus={handlePriceSelectFocus}
              onBlur={handlePriceSelectChange}
              onChange={handlePriceSelectChange}
            >
              <option defaultValue="All">All</option>
              {priceSelection(30, MAXPRICE, 10).map((price) => (
                <option value={price} key={price}>
                  To {price}$
                </option>
              ))}
            </Select>
          </Label>
          <svg className="icon">
            <use
              href={`${icon}${
                priceSelectOpen ? "#icon-chevron-top" : "#icon-chevron-down"
              }`}
            ></use>
          </svg>
        </SelectContainer>
        <Label>
          Сar mileage / km
          <InputWrapper>
            <Input
              name="mileageFrom"
              id="mileage"
              placeholder="From"
              type="text"
            ></Input>
            <Input
              name="mileageTo"
              id="endMileage"
              placeholder="To"
              type="text"
            ></Input>
          </InputWrapper>
        </Label>
        <SearchButton type="submit">Search</SearchButton>
      </Form>
    </Container>
  );
};

export default FilterBar;
