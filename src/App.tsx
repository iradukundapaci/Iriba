import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import IribaHome from './pages/IribaHome';
import Portfolio from './pages/Portfolio';
import ViewProject from './pages/ViewProject'; // Update the import here
import AboutUs from './pages/AboutUs';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
      case '/youtube-1':
        title = '';
        metaDescription = '';
        break;
      case '/portfolio':
        title = '';
        metaDescription = '';
        break;
      case '/viewproject':
        title = '';
        metaDescription = '';
        break;
      case '/about-us':
        title = '';
        metaDescription = '';
        break;
      case '/contact-us':
        title = '';
        metaDescription = '';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IribaHome />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:title" element={<ViewProject />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
