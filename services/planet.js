export async function getPlanetData(planetName) {
    const cleanName = planetName.trim().toLowerCase();
    // Güneş sistemi API'si
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${cleanName}`);
    
    if (!response.ok) {
        throw new Error("Gezegen adı bulunamadı. Lütfen İngilizce yazın (Örn: Mars, Jupiter, Saturn)");
    }
    
    const data = await response.json();
    
    return {
        name: data.englishName,
        gravity: data.gravity // API'den gelen yerçekimi değeri (m/s²)
    };
}
