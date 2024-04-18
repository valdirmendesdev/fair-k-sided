import express from 'express';
import {calculatePossibilities, calculateProbability} from "./lib/probability.mjs";

const app = express();
const port = process.env.PORT || 8000;
const maxOfPossibilities = 99;

app.get('/probability', (req, res) => {
    const k = req.header('k');
    try {
        if (k) {
            const probability = calculateProbability(parseInt(k, 10));
            res.json({ probability });
        } else {
            const probabilities = calculatePossibilities(maxOfPossibilities);
            res.json({ probability: probabilities });
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
