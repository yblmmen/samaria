const mysql = require('mysql');

// 데이터베이스 연결 설정
const db = mysql.createConnection({
    host: '158.180.77.237',
    user: 'root',
    password: 'password',
    database: 'acore_auth',
    port: 63306
});

// 데이터베이스 연결
db.connect((err) => {
    if (err) {
        console.error('데이터베이스 연결 실패:', err);
        return;
    }
    console.log('데이터베이스 연결 성공');
});

module.exports = db;
