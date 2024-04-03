import React from 'react';
import { Outlet } from 'react-router-dom';

export const GalleryLayout = () => {
  return (
    <>
      <h1>GALERIA BALLROOM</h1>
      <Outlet />
    </>
  );
};
