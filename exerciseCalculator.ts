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
  exercisesDay: Array<number>;
  goal: number;
}

export const parseArgument = (args: string[], goals: string): Value => {
  if (!isNaN(Number(args)) && !isNaN(Number(goals))) {
    if (args.length > 7 || args.length < 7) throw new Error('malformatted parameters');
    const str: string[] = args.slice()
    const data: number[] = str.map(a => Number(a));
    return {
      goal: Number(goals),
      exercisesDay: data
    };
  } else {
    throw new Error('parameters missing');
  }
}

export const calculateExercise = (dailyExercises: Array<number>, target: number): Result => {
  const period: number = dailyExercises.length;
  const trainig: number = dailyExercises.filter(dia => dia > 0).length;
  let description: string = "Good!";
  const averages: number = dailyExercises.reduce((a, b) => a + b, 0) / period;
  const trainSucces: boolean = averages >= target;
  let ratings: number = 3;

  if (dailyExercises.filter(dia => dia === 0).length > 4) {
    ratings = 1;
    description = "Bad";
  } else {
    ratings = 2;
    description = "Medium";
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
/*
try {
  const { trainingData, goal } = parseArgument(process.argv);
  console.log(calculateExercise(trainingData, goal));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}*/