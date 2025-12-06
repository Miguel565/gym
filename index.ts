import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello Full Stack!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server starting on port: ${PORT}`);
})