const calculate = (masa: number, altura: number): string => {
    const alturaMetro: number = altura / 100;
    const imc: number = masa / Math.pow(alturaMetro, 2);
    if (imc < 18.5) return 'Peso bajo ';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 24.9 && imc < 29.9) return 'Sobrepeso';
    if (imc > 30) return 'Obesidad';
}
/**
const masa: number = Number(process.argv[2]);
const altura: number = Number(process.argv[3]);*/
console.log(calculate(80, 173));