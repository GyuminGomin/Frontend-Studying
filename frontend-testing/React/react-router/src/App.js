
import './App.css';
import EventComponent from './EventComponent';
import Form from './Form';
import Counter from './Counter';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <h3>Not Found Page</h3>
  )
}


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/form">form</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/eventComponent">EventComponent</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<h3>Main Index Page</h3>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/eventComponent' element={<EventComponent/>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
