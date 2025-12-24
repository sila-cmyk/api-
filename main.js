import { getPlanetData } from './services/planet.js';
import { calculateWeightOnPlanet } from './services/calculator.js';

document.getElementById('calcBtn').addEventListener('click', async () => {
    const pInput = document.getElementById('planetInput').value;
    const wInput = document.getElementById('weightInput').value;
    const resultDiv = document.getElementById('result');

    try {
        resultDiv.innerHTML = "Veriler hesaplanıyor...";
        
        // 1. Veriyi çek
        const planet = await getPlanetData(pInput);
        
        // 2. Hesaplamayı yap
        const finalWeight = calculateWeightOnPlanet(wInput, planet.gravity);

        // 3. Ekrana Yazdır
        resultDiv.innerHTML = `
            <div style="color: #00f2fe; padding: 10px; border: 1px solid #4facfe; margin-top: 10px;">
                <strong>Gezegen:</strong> ${planet.name} <br>
                <strong>Yerçekimi:</strong> ${planet.gravity} m/s² <br>
                <strong>Oradaki Ağırlığınız:</strong> ${finalWeight} kg
            </div>
        `;

    } catch (error) {
        resultDiv.innerHTML = `<span style="color: red;">⚠️ ${error.message}</span>`;
    }
});
