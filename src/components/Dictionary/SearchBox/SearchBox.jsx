// @vendors
import { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { SearchHeart } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';

// @styles
import './searchBox.scss';

// @app
import { setSearchedWord, setWasFound } from '../../../app';

export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');

  const { wordsData } = useSelector((state) => state.data.dictionary);

  const searchInputRef = useRef(null);

  const dispatch = useDispatch();

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const foundWord = wordsData.find((wordData) => {
      return wordData.word === searchValue.toLowerCase();
    });

    if (foundWord) {
      console.log('Word found:', foundWord);
      dispatch(setSearchedWord(foundWord));
      dispatch(setWasFound(true));
    } else {
      console.log('Word not found');
      dispatch(setWasFound(false));
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Form
      className="searchBox d-flex flex-colum justify-content-center m-3 w-70"
      onSubmit={handleSearchSubmit}
    >
      <Form.Group className="sb__button-container d-flex justify-content-center">
        <Form.Control
          className="border-right-0"
          type="text"
          placeholder={searchValue === '' ? '¿Qué buscas mariquita?' : ''}
          ref={searchInputRef}
          onChange={handleInputChange}
          value={searchValue}
        />
        <Button
          className="search-btn btn-secondary"
          size="lg"
          type="submit"
          disabled={!searchValue.trim()}
        >
          <SearchHeart size="2rem" />
        </Button>
      </Form.Group>
    </Form>
  );
};
