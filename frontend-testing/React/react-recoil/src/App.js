import logo from './logo.svg';
import './App.css';
import { RecoilRoot } from 'recoil';
import CounterRecoil from './CounterRecoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <CounterRecoil/>
      </RecoilRoot>
    </div>
  );
}

export default App;
