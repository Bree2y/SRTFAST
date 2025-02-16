import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';

interface LoginProps {
  onLoginSuccess?: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 실제 서비스 로직: API 요청 등
    console.log('Login attempt:', { email, password });

    // 로그인 성공 처리
    if (onLoginSuccess) {
      onLoginSuccess(email);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <Typography variant="h5" align="center">
          로그인
        </Typography>

        <TextField
          label="이메일"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          로그인
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
