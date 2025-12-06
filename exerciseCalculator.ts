interface Result {
    periodLenght: number;
    trainingDays: number;
    succes: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

interface Value {
    trainingData: Array<number>;
    goal: number;
}

const parseArgument = (args: string[]): Value => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 10) throw new Error('Too many arguments');

  const str: string[] = args.slice(3)
  const data: number[] = str.map(a => Number(a)).filter(n => !isNaN(n));

  if (!isNaN(Number(args[2]))) {
    return {
      goal: Number(args[2]),
      trainingData: data
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
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

try {
  const { trainingData, goal } = parseArgument(process.argv);
  console.log(calculateExercise(trainingData, goal));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}