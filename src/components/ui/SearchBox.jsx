// @vendors
import { Button, Form } from "react-bootstrap";

export const SearchBox = () => {
  return (
    <Form className="searchBox d-flex flex-colum justify-content-between mb-3 w-50">
      <Form.Control
      className="w-80"
        type="text"
        placeholder="¿Qué buscas mariquita?"
      />
      <Button className="search-btn">
        <i className="fas fa-search"></i>
      </Button>


    </Form>
  );
};