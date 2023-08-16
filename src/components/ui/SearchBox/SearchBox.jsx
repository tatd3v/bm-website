// @vendors
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SearchHeart } from "react-bootstrap-icons";

// @styles
import "./searchBox.scss"

export const SearchBox = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleSearchClick = () => {
    setShowPlaceholder(false);
  }

  return (
    <Form className="searchBox d-flex flex-colum justify-content-center m-3 w-70">
      <Form.Group className="sb__button-container d-flex justify-content-center">
        <Form.Control
          className="border-right-0"
          type="text"
          placeholder={showPlaceholder ? "¿Qué buscas mariquita?" : ""}
          onClick={handleSearchClick}
        />
        <Button className="search-btn" size="lg">
          <SearchHeart size="2rem" />
        </Button>
      </Form.Group>
    </Form>
  );
};