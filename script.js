// API-nøkler (bruk dine egne fra chatten)
const API_FOOTBALL_KEY = "4a080f9495715b3b81f916155aa288b8"; // Erstatt med din nøkkel
const ODDS_API_KEY = "4ad11ecc9ae7c64e30f0a1ec62b46281"; // Erstatt med din nøkkel

async function getMatches() {
    try {
        const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=103&season=2024`, {
            headers: {
                "X-RapidAPI-Key": API_FOOTBALL_KEY,
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
            }
        });
        const data = await response.json();
        return data.response || [];
    } catch (error) {
        console.error("API-feil:", error);
        return [];
    }
}

function displayMatches(matches) {
    const container = document.getElementById("tips-container");
    if (matches.length === 0) {
        container.innerHTML = "<p>Ingen kamper i dag.</p>";
        return;
    }
    
    matches.forEach(match => {
        container.innerHTML += `
            <div class="match">
                <strong>${match.teams.home.name} vs ${match.teams.away.name}</strong>
                <p>${new Date(match.fixture.date).toLocaleString()}</p>
            </div>
        `;
    });
}

// Start appen
getMatches().then(displayMatches);
