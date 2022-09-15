import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Filters = (prod) => {
  const {
    productDispatch,
    productState: {sort, byRating, byCategory },
  } = CartState();

  // make state for rating

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
      <DropdownButton title="Category"  id="dropdownButton"  onSelect={(e) =>
          productDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: e
            })
          }>

         <Dropdown.Item eventKey="soft"  
          style={{ cursor: "pointer" }}>Soft</Dropdown.Item>
         <Dropdown.Item eventKey="wooden" 
          style={{ cursor: "pointer" }}>Wooden</Dropdown.Item>
         <Dropdown.Item eventKey="cotton" 
          style={{ cursor: "pointer" }}>Cotton</Dropdown.Item>
         <Dropdown.Item eventKey="plastic" 
          style={{ cursor: "pointer" }}>Plastic</Dropdown.Item>
         <Dropdown.Item eventKey="fresh" 
          style={{ cursor: "pointer" }}>Fresh</Dropdown.Item>
         <Dropdown.Item eventKey="rubber" 
          style={{ cursor: "pointer" }}>Rubber</Dropdown.Item>
         <Dropdown.Item eventKey="frozen" 
          style={{ cursor: "pointer" }}>Frozen</Dropdown.Item>
         <Dropdown.Item eventKey="granite" 
          style={{ cursor: "pointer" }}>Granite</Dropdown.Item>
         <Dropdown.Item eventKey="concrete" 
          style={{ cursor: "pointer" }}>Concrete</Dropdown.Item>
        </DropdownButton>
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
