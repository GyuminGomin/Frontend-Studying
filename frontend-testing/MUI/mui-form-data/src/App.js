import React from 'react';
import { Container } from '@mui/material';
import SignUpForm from './SignUpForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DataTable from './DataTable';

const NotFound = () => {
  return (
    <h3>Page Not Found</h3>
  )
}

function App() {
  return (
    <Container sx={{p:5}} maxWidth="lg">
      <Router>
        <Routes>
          <Route path="/" element={<Link sx={{p:5}} to="signup">가입 페이지 이동</Link>} />
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/data" element={<DataTable/>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
