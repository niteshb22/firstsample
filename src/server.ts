// src/server.ts
import express, { Request, Response } from 'express';
import downloadRoutes from './routes/downloadRoute'
import connectDB from './db/db';

const app = express();

const PORT = 3000;

// MonnogDB Connect
connectDB()
// Use the download routes
app.use('/auth', downloadRoutes);

app.use(express.json());
app.get('/',(req:Request,res:Response)=>{
    res.send("API is running")
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
