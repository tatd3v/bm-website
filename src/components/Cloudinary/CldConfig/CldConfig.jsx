// @vendors
import { CloudinaryContext } from '@cloudinary/react';

export const CldConfig = ({ children }) => {
  return (
    <CloudinaryContext
      cloudName={import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}
      apiKey={import.meta.env.VITE_CLOUDINARY_API_KEY}
      apiSecret={import.meta.env.VITE_CLOUDINARY_API_SECRET}
    >
      {children}
    </CloudinaryContext>
  );
};
