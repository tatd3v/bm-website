// @vendors
import { Cloudinary } from '@cloudinary/url-gen';

export const cldHelpers = () => {
  return new Cloudinary({
    cloud: {
      cloudName: 'demo',
    },
  });
};
