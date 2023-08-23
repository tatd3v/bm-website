// @vendors
//import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

// @styles
import './lookupInfo.scss';

// @helpers
import { capitalizeFirstLetter } from '../../../helpers';

export const LookupInfo = () => {
  const { searchedWord } = useSelector((state) => state.data.dictionary);
  console.log({ searchedWord });

  return (
    searchedWord && (
      <div className="word-description">
        <h2 className="word-title">
          {capitalizeFirstLetter(searchedWord.word)}
          {/* <Button className="volume">
            <i className="fas fa-volume-up"></i>
          </Button> */}
        </h2>
        {/* <div className="word-desc-list">
          <h4>Part of Speech:</h4>
          <p className="word-desc-result">{data.meanings[0].partOfSpeech}</p>
        </div> */}
        <div className="word-desc-list">
          <h5>Definición:</h5>
          <p className="word-desc-result">{searchedWord.definition}.</p>
        </div>
        <div className="word-desc-list">
          <h5>Ejemplo de Uso:</h5>
          <p className="word-desc-result">
            &quot;<em>{searchedWord.usageExample}</em>&quot;
          </p>
        </div>
      </div>
    )
  );
};
