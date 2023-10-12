import './App.css';
import CounterRedux from './CounterRedux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {counter} from "./Reducer"

const CounterStore = createStore(counter);

function App() {
  return (
    <div className="App">
      <Provider store={ CounterStore }>
        <CounterRedux/>
      </Provider>      
    </div>
  );
}

export default App;
