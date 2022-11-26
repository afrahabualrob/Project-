import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from './Layout';
import ImagesList from '../ImagesList';
import UploadSection from '../UploadSection';


const Routing= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<UploadSection />} />
          <Route path="shop" element={<ImagesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;