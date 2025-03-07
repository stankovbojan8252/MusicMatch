import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Chat route is working!' });
});

export default router; // ✅ Default export
