// components
import { Container } from 'react-bootstrap';
import { SearchBox } from './SearchBox';
import { LookupInfo } from './LookupInfo';
import { useSelector } from 'react-redux';

export const Dictionary = () => {
  const { wasFound } = useSelector((state) => state.data.dictionary);

  console.log({ wasFound });

  return (
    <Container className="d-flex justify-content-center flex-column">
      <SearchBox />
      {wasFound && <LookupInfo />}
    </Container>
  );
};
