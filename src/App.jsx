import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes'
import './App.css'
import Navigation from './components/PagesComponents/Navigation/Navigation';
import Footer from './components/PagesComponents/Footer/Footer';

function App() {

  return (
    <div className="App">

      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
