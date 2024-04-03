// @vendors
import { useParams } from 'react-router-dom';

export const GalleryByBall = () => {
  const params = useParams();

  return <div>{params.eventPath}</div>;
};
