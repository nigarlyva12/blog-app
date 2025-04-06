import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();  

app.use(cors());
app.use(express.json());

app.get('api/ping', (req, res) =>{
    res.json({message: 'pong'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})