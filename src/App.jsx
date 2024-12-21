import { Route, Routes, Navigate } from "react-router-dom";

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CamperDetails from './pages/CamperDetails';
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import Reviews from "./components/Reviews/Reviews";
import Features from "./components/Features/Features";




function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CamperDetails />} >
          <Route index element={<Navigate to="features" replace />} />
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;