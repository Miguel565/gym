const calculate = (masa: number, altura: number): string => {
    const imc = masa / Math.pow(altura, 2);
    if (imc < 18.5) return 'Peso bajo';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 24.9 && imc < 29.9) return 'Sobrepeso';
    if (imc > 30) return 'Obesidad';
}