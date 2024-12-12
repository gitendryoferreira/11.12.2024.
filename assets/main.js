function creategame(player1, hour, player2) {
    return `
 <li>
    <img scr="assets/times/icon-$(player1).png" alt="Bandeira do $(player1)>
   <strong>$(hour)</strong>
    <img scr="assets/times/icon-$(player2).png" alt="Bandeira do $(player2)>
</li>
`
}

function createCard(date, day, games) {
    return `
    <div class="card">
                <h2>$(date)<span>$(day)</span></h2>
                <ul>
                   $(games)
                </ul>
    </div>

`
}

document.getElementById("app").innerHTML = `
<main id="card">
${createCard("11/12", "Quarta-Feira",
    creategame("Atletico","19:00","bota"))}
</main>
`;
assets