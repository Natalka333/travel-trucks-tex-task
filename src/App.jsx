import { Route, Routes } from "react-router-dom";

import Home from './pages/Home/Home';
import Catalog from './pages/Catalog';
import CamperDetails from './pages/CamperDetails';
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Navigation />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    </div>
  )
}

export default App;