import logo from './logo.svg';
import './App.css';
import CreditCard from './Components/CreditCard';

function App() {
  return (
    <div className="App" 
      style={{
        backgroundImage: `url("https://www.wallpaperup.com/uploads/wallpapers/2015/04/12/659899/fe60d13dba30b5ba785b7e2c99b3a088.jpg")`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '800px'
        }}>
      <CreditCard />
    </div>
  );
}

export default App;
