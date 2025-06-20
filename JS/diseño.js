perfil = `
        <div class="player-profile">
            <img class="player-image" src="./img/courtois.jpeg" alt="">
            <div class="player-info">
                <h1 class="player-name">Thibaut Courtois</h1>
                <p class="player-age">Edad: 32</p>
                <p class="player-position">Posición: Arquero</p>
                <p class="player-team">Equipo: Real Madrid</p>
            </div>
        </div>

`;

const profile = document.querySelector(".players");
profile.innerHTML = perfil;

