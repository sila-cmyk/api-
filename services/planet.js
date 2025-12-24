export async function getPlanetData(planetName) {
    // Boşlukları temizle ve küçük harfe çevir
    const cleanName = planetName.trim().toLowerCase();
    
    // Güneş sistemi API'si genellikle İngilizce isimleri kabul eder
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${cleanName}`);
    
    if (!response.ok) {
        throw new Error(`'${planetName}' gezegeni sistemde kayıtlı değil.`);
    }
    
    const data = await response.json();
    
    return {
        name: data.englishName || data.name,
        gravity: data.gravity
    };
}
