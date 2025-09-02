function areatriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

export { areaCirculo, areatriangulo };