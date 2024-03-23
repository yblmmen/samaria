const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
    const { username, password } = req.body;
    // 여기에 계정 생성 로직 추가 (예시 코드, 실제 DB 연결 필요)
    console.log(username, password);
    res.json({ message: "계정이 생성되었습니다!" });
});

module.exports = router;
