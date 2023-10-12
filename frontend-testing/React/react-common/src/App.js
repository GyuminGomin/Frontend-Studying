import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Form from './Form';
import EventComponent from './EventComponent';

function App() {
  return (
    <div className="App">
      <EventComponent/>
      <Form/>
      <Counter/>
    </div>
  );
}

export default App;
