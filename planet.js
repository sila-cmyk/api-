export async function getPlanetData(planetName) {
    // Güneş sistemi verileri sağlayan ücretsiz bir API
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName.toLowerCase()}`);
    if (!response.ok) throw new Error('Gezegen bulunamadı');
    const data = await response.json();
    
    return {
        name: data.englishName,
        gravity: data.gravity, // m/s² cinsinden
        mass: data.mass.massValue // Kütle değeri
    };
}
