import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from './Layout';
import ImagesList from '../ImagesList';
import Upload from '../'


const Routing= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Upload />} />
          <Route path="shop" element={<ImagesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;