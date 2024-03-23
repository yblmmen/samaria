const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const accountRoutes = require('./routes/accountRoutes');
const app = express();

// Express 애플리케이션 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // 'public' 디렉토리의 정적 파일 제공
app.use(session({
    secret: 'secret', // 세션 쿠키를 서명하는데 사용되는 비밀키
    resave: false, // 세션을 항상 저장할 지 여부 (변경되지 않아도 저장)
    saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 강제로 저장
}));

// 계정 관련 라우트 설정
app.use('/account', accountRoutes);

// app 객체를 모듈로 내보냄
module.exports = app;
