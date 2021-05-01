import './App.scss';
import Moon from './assets/moon.svg';
import Sun from './assets/sun.svg';
import Popular from './components/Popular';
function App() {
  return (
    <div className="container">
      <nav className="header">
        <ul className="row-nav">
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Battle</a>
          </li>
        </ul>
        <button>
          <img
            className="img"
            src={Sun}
            alt=""
          />
        </button>
      </nav>
      <Popular />
    </div>
  );
}

export default App;
