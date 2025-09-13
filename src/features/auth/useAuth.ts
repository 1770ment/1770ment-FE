export const useAuth = () => {
  const handleKakaoLogin = () => {
    console.log('카카오로 시작하기');
    // TODO: 카카오 로그인 로직 구현
  };

  const handleAppleLogin = () => {
    console.log('애플로 시작하기');
    // TODO: 애플 로그인 로직 구현
  };

  return {
    handleKakaoLogin,
    handleAppleLogin,
  };
};
