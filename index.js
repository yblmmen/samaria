const app = require('./app'); // 수정된 부분: './src/app'에서 './app'로 변경, 디렉토리 구조에 따라 경로 조정 필요
const port = process.env.PORT || 3000;

// 서버 시작
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
