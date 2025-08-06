// API-nøkler (erstatt med dine egne)
const API_FOOTBALL_KEY = "4a080f9495715b3b81f916155aa288b8";
const ODDS_API_KEY = "4ad11ecc9ae7c64e30f0a1ec62b46281";

async function fetchMatches() {
    const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=103&season=2024`, {
        headers: {
            "X-RapidAPI-Key": API_FOOTBALL_KEY,
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
    });
    const data = await response.json();
    return data.response;
}

async function displayTips() {
    const matches = await fetchMatches();
    const container = document.getElementById("tips-container");
    
    matches.forEach(match => {
        container.innerHTML += `
            <div class="match">
                <strong>${match.teams.home.name} vs ${match.teams.away.name}</strong><br>
                Liga: ${match.league.name}<br>
                Tid: ${new Date(match.fixture.date).toLocaleString()}
            </div>
        `;
    });
}

displayTips();
