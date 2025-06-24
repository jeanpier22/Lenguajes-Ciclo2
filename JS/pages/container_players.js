const profile = document.querySelector(".players");


for(const jugador of players){
    profilePlayer(jugador);
}

function mostrarSeccion(position){
    const profile = document.querySelector(".players");
    profile.innerHTML = "";
    
    if(position =="Contacto"){
        profile.innerHTML = "";
        const form = document.querySelector(".form");
        form.innerHTML = form2;
    }
    else{
            profile.innerHTML = "";
            for(const jugador of players){  
                if (jugador.position == position){
                    profilePlayer(jugador);       
                }   
            }
    }
}

function profilePlayer(jugador){
    perfil = `
                    <div class="player-profile">
                        <img class="player-image" src=${jugador.imageUrl} alt="">
                        <div class="player-info">
                            <h1 class="player-name">${jugador.name}</h1>
                            <p class="player-age">Edad: ${jugador.age}</p>
                            <p class="player-position">Posición: ${jugador.position}</p>
                            <p class="player-team">Equipo: ${jugador.team}</p>
                        </div>
                    </div>`;
    profile.innerHTML += perfil;
}
    

       






  

