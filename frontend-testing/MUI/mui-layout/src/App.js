import logo from './logo.svg';
import './App.css';
import ButtonExample from './ButtonExample';
import SwitchExample from './SwitchExample';
import RadioExample from './RadioExample';
import TextFieldExample from './TextFieldExample';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container sx={{p:5}} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ButtonExample/>
          </Grid>
          <Grid item xs={12}>
            <SwitchExample/>
          </Grid>
          <Grid item xs={12}>
            <RadioExample/>
          </Grid>
          <Grid item xs={12}>
            <TextFieldExample/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
