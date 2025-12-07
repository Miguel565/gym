interface Values {
    peso: number;
    estatura: number;
}

export const parseArguments = (a: string, b: string): Values => {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        throw new Error('Bad arguments');
    }

    return {
        peso: Number(b),
        estatura: Number(a)
    };
}

export const calculateBmi = (masa: number, altura: number): string => {
    const alturaMetro: number = altura / 100;
    const imc: number = masa / Math.pow(alturaMetro, 2);
    if (imc < 18.5) return 'Peso bajo ';
    if (imc >= 18.5 && imc < 24.9) return 'Normal (healthy weight)';
    if (imc >= 24.9 && imc < 29.9) return 'Sobrepeso';
    if (imc >= 29.9) return 'Obesidad';

    return 'Algo salio mal';
}