import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import FelszereltsegPage from './pages/FelszereltsegPage';
import LocationPage from './pages/LocationPage';
import ArakPage from './pages/ArakPage';

function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/felszereltseg" element={<FelszereltsegPage />} />
          <Route path="/szobak" element={<RoomsPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/elhelyezkedes-programok" element={<LocationPage />} />
          <Route path="/arak" element={<ArakPage />} />
          <Route path="/velemenyek" element={<TestimonialsPage />} />
          <Route path="/kapcsolat" element={<ContactPage />} />
          <Route path="/foglalas" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
