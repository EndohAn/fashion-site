import Header from './components/header/Header'
import Promo from './components/promo/Promo';
import Brands from './components/brands/Brands';
import Arrivals from './components/arrivals/Arrivals';
import Banner from './components/banner/Banner';

function App() {

  return (
		<div className="App">
      <Header />
      <Promo />
      <Brands /> 
      <Arrivals />
      <Banner /> 
		</div>
  );
}

export default App;
