import './App.css';
import DataComponent from './DataComponent';
import { DataProvider } from './DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <DataComponent />
      </DataProvider>
    </div>
  );
}

export default App;
