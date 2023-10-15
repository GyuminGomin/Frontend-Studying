import './App.css';
import BasicGrid from './BasicGrid';
import ComplexLayout from './ComplexLayout';
import LeftRightLayout from './LeftRightLayout';
import ThreeLayout from './ThreeLayout';

function App() {
  return (
    <div className="App">
      <h3>BasicGrid</h3>
      <BasicGrid/>
      <h3>LeftRightLayout</h3>
      <LeftRightLayout/>
      <h3>ThreeLayout</h3>
      <ThreeLayout/>
      <h3>ComplexLayout</h3>
      <ComplexLayout/>
    </div>
  );
}

export default App;
