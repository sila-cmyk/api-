export function calculateWeightOnPlanet(userWeight, planetGravity) {
    // Dünya yerçekimi sabiti: 9.8
    const worldGravity = 9.8;
    // Formül: (Kütle / Dünyadaki Çekim) * Gezegendeki Çekim
    const result = (parseFloat(userWeight) / worldGravity) * planetGravity;
    return result.toFixed(2);
}
