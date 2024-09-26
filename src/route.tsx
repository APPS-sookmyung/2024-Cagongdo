import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage/OnboardingPage';
import CafeListPage from './pages/CafeListPage/CafeListPage';
import MapPage from './pages/MapPage/MapPage';
import RecommendPage from './pages/RecommendPage/RecommendPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/cafe-list" element={<CafeListPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/recommend" element={<RecommendPage />} />
      <Route path="/my-page" element={<RecommendPage />} />
    </Routes>
  );
};

export default AppRoutes;
