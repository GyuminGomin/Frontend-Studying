import logo from './logo.svg';
import './App.css';
import ButtonExample from './ButtonExample';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container sx={{p:5}} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ButtonExample></ButtonExample>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
