interface Values {
    peso: number;
    estatura: number;
}

const parseArguments = (args: string[]): Values => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            peso: Number(args[2]),
            estatura: Number(args[3])
        };
    }
}

const calculate = (masa: number, altura: number): string => {
    const alturaMetro: number = altura / 100;
    const imc: number = masa / Math.pow(alturaMetro, 2);
    if (imc < 18.5) return 'Peso bajo ';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 24.9 && imc < 29.9) return 'Sobrepeso';
    if (imc > 30) return 'Obesidad';
}

try {
    const { peso, estatura } = parseArguments(process.argv);
    console.log(calculate(peso, estatura));
} catch (error: unknown){
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}