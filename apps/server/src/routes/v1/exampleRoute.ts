import express from 'express';

const router = express.Router();

router.route('/welcome').get((req, res) => {
  res.send('환영합니다! 처음 방문하셨네요.');
});

router.route('/test').get((req, res) => {
  res.send('test');
});

export default router;
