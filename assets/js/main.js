function creategame(player1, hour, player2) {
    return `
      <li>
      <img src="assets/times/icon-${player1}.png" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="assets/times/icon-${player2}.png" alt="Bandeira do ${player2}">
      </li>
      `
  }
  
  function createcard(date, day, games) {
    return `
      <div class="card">
          <h2>${date} <span>${day} </span></h2>
        <ul>
          ${games}
        </ul>
      </div>
      `
  }
  
  document.getElementById("app").innerHTML = `
  <main id="cards">
      
  ${createcard("11/12", "Quarta-Feira",
    creategame("Atletico", "19:00", "bota" ))}
  
    ${createcard("15/12", "Domingo",
      creategame("Corinthians", "16:00", "palmeiras" ))}
  
      ${createcard("25/12", "quinta-Feira",
        creategame("Flamengo", "19:00", "inter" ))}
  
        ${createcard("16/12", "segunda-Feira",
          creategame("santos", "14:00", "cruzeiro" ))}
  
  </main>
  `;_