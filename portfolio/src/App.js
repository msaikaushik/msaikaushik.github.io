import './App.css';
import BackgroundPage from './components/BackgroundPage';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BackgroundPage></BackgroundPage>
      <About></About>
    </div>
  );
}

export default App;
