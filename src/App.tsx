import React from 'react';
import Login from './pages/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  // 테마 커스터마이징 (색상, 폰트 등) 가능
});

const App: React.FC = () => {
  const handleLoginSuccess = (email: string) => {
    alert(`${email}로 로그인 성공!`);
    // 로그인 성공 후 로직 (ex: 라우팅, 토큰 저장 등)
  };

  return (
    <ThemeProvider theme={theme}>
      {/* MUI 기본 스타일 초기화 */}
      <CssBaseline />
      <Login onLoginSuccess={handleLoginSuccess} />
    </ThemeProvider>
  );
};

export default App;
