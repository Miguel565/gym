interface Result {
    periodLenght: number;
    trainingDays: number;
    succes: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercise = (horasByDia: Array<number>, target: number): Result => {
    const period: number = horasByDia.length;
    const trainig: number = horasByDia.filter(dia => dia > 0).length;
    const description: string = "Descripción por defecto!";
    const averages: number = horasByDia.reduce((a, b) => a + b, 0) / period;
    const trainSucces: boolean = averages >= target;
    let ratings: number = 3;

    if (horasByDia.filter(dia => dia === 0).length > 4) {
        ratings = 1;
    } else {
        ratings = 2;
    }
    return {
        periodLenght: period,
        trainingDays: trainig,
        succes: trainSucces,
        rating: ratings,
        ratingDescription: description,
        target: target,
        average: averages
    };
}

const trainingData: number[] = [3,0,2,4.5,0,2,1];
console.log(calculateExercise(trainingData, 2));