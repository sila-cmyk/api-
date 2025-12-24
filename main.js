import { getPlanetData } from './services/planet.js';
import { calculateWeightOnPlanet } from './services/calculator.js';

async function initApp() {
    const btn = document.getElementById('calcBtn');
    const planetInput = document.getElementById('planetInput');
    const weightInput = document.getElementById('weightInput');
    const resultArea = document.getElementById('result');

    btn.addEventListener('click', async () => {
        try {
            // Temizleme ve yükleme durumu
            resultArea.innerHTML = "<p style='color: #4facfe'>Uzaydan veriler alınıyor...</p>";
            
            const planetName = planetInput.value.trim();
            const userWeight = parseFloat(weightInput.value);

            if (!planetName || !userWeight) {
                throw new Error("Lütfen gezegen adı ve kilonuzu girin.");
            }

            // 1. API SERVİSİ: Gezegen verisini çek
            const planet = await getPlanetData(planetName);
            console.log("Gelen Gezegen Verisi:", planet);

            // 2. HESAPLAMA SERVİSİ: Ağırlığı hesapla
            const finalWeight = calculateWeightOnPlanet(userWeight, planet.gravity);

            // Sonucu ekrana bas
            resultArea.innerHTML = `
                <div class="result-card">
                    <strong>Gezegen:</strong> ${planet.name} <br>
                    <strong>Yerçekimi:</strong> ${planet.gravity} m/s² <br>
                    <strong>Yeni Ağırlığınız:</strong> ${finalWeight} kg
                </div>
            `;

        } catch (error) {
            console.error("Hata Yakalandı:", error);
            resultArea.innerHTML = `<p style="color: #ff4d4d;">⚠️ Hata: ${error.message}</p>`;
        }
    });
}

initApp();
