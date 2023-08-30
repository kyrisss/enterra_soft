import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "@components/Layout/MainLayout";
import { Loader } from "@components/Loader";
import { MainPage } from "@views/MainPage";

export const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
