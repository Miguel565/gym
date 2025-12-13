import express from 'express';
import { calculateBmi, parseArguments } from './bmiCalculator';
import { calculateExercise, parseArgument } from './exerciseCalculator';
//import qs from 'qs';

const app = express();

app.get('/hello', (_req, res) => {
    res.status(200).send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = req.query.height as string;
    const weight = req.query.weight as string;

    if (!height || !weight) {
        res.status(400).json({ error: 'Faltan parametros: height y weight son requeridos' });
    }

    try {
        const { peso, estatura } = parseArguments(height, weight);
        const imc = calculateBmi(peso, estatura);
        res.status(200).json({
            height: estatura,
            weight: peso,
            bmi: imc
        });
    } catch (error) {
        res.status(400).json({ error: 'Malformatted parameters' });
    }
});

app.post('/exercises', (req, res) => {
    const dailyExercises = req.query.dailyExercises as string[];
    const targets = req.query.targets as string;

    try {
        const { exercisesDay, goal } = parseArgument(dailyExercises, targets);
        const result = calculateExercise(exercisesDay, goal);
        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({ error });
    }
});

export default app;