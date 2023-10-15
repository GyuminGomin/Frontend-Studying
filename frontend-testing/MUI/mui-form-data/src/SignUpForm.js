import React, { useState } from 'react';
import {Container, Grid, TextField, Typography, Button, Paper} from '@mui/material';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    name: Yup.string().required('이름을 입력하세요'),
    email: Yup.string().email('올바른 이메일 주소를 입력하세요.').required('이메일을 입력하세요'),
    password: Yup.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.').required('비밀번호를 입력하세요')
})

const SignUpForm = () => {
    const navigation = useNavigate();
    const [values, setValues] = useState({name: '', email: '', password: ''});
    const [errors, setError] = useState({});
    const handleChange = (e) => {
        const { name, values } = e.target;
        setError({
            ...errors,
            [name] : ''
        })
        setValues({
            ...values,
            [name]: values,
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
            setError(errorMessages);
          });
      };

    return (
        <Container component="main" maxWidth="xs">
            <Paper
                elevation={3}
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    felxDirection: 'column',
                    alignItem: 'center',
                    padding: 3,
                }}
            >
            <Typography component="h1" variant="h5" mb={2}>
                회원가입
            </Typography>
            <form noValidate onSubmit={handleSubmit} sx={{ width: '100%',marginTop:3 }}>
                <Grid container spacing={2}>
                    <Grid item sx={12}>
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
                    <Grid item sx={12}>
                        <TextField 
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete='email'
                            value={values.email}
                            onChange={handleChange}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item sx={12}>
                        <TextField 
                            required
                            fullWidth
                            id="password"
                            label="비밀번호"
                            name="password"
                            type='password'
                            autoComplete='password'
                            value={values.password}
                            onChange={handleChange}
                            error={Boolean(errors.password)}
                            helperText={errors.password}
                        />
                    </Grid>
                </Grid>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 1}}
                    >
                    가입하기
                </Button>
            </form>
            </Paper>
        </Container>
    );
};

export default SignUpForm