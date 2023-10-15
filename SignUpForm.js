import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Container, Grid, TextField, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";

const validationSchema = Yup.object({
    name: Yup.string().required('이름을 입력하세요'),
    email: Yup.string().email('올바른 이메일 주소를 입력하세요').required('이메일을 입력하세요'),
    password: Yup.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다').required('비밀번호를 입력하세요'),
});

const SignUpForm = () => {
    const navigation = useNavigate();
    const [values, setValues] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
      const { name, value } = e.target;
      setErrors({
        ...errors, [name] : ''
      });
      setValues({
        ...values,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
        await validationSchema.validate(values, { abortEarly : false}).then((valid) => {
          axios.post('https://jsonplaceholder.typicode.com/users', values)
            .then(response => {
              console.log('회원가입 성공:', response.data);
              navigation('/data');
            })
            .catch(error => {
              console.error('회원가입 실패:', error);
            });
        }).catch((err) => {
          console.log('err : ', err)
          const errorMessages = {};
          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          });
          setErrors(errorMessages);
        });
    };

    return (
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
          }}
        >
          <Typography component="h1" variant="h5" mb={2}>
            회원가입
          </Typography>
          <Form
            noValidate
            onSubmit={handleSubmit}
            sx={{ width: '100%', marginTop: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  name="name"
                  autoFocus
                  value={values.name}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              가입하기
            </Button>
          </Form>
        </Paper>
      </Container>
    );
};

export default SignUpForm