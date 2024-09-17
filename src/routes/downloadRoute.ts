// src/routes/downloadRoutes.ts
import express, { Request, Response } from 'express';
import { generateAndSendExcel } from '../service/downloadService'

const router = express.Router();

// Route to download Excel
router.get('/download', async (req: Request, res: Response) => {
  // Call the service function with both req and res
  await generateAndSendExcel(req, res);
});

export default router;
