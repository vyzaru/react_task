import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'

const router = express.Router();
const prisma = new PrismaClient();

router.put('/update', async (req, res) => {
  const { id, name, email, password, avatar, number } = req.body;
  let hashed_pwd = await bcrypt.hash(password, 3)
  try {
    await prisma.$connect();
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id, 10) },
      data: { 
        name: name ? name : '',
        email,
        password: hashed_pwd, 
        avatar: avatar ? avatar : '',
        number: number ? parseInt(number, 10) : null
      },
    });
    await prisma.$disconnect();
    res.json({ ok: true, result: updatedUser });
  } catch (error) {
    await prisma.$disconnect();
    res.status(500).json({ ok: false, errMsg: error.message });
  }
});

export default router;