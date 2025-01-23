let vareContainer = document.getElementById("vare-oversikt");

let returnertDiv = document.getElementsByClassName("returnert");
function lageVareSeksjon(varenavn) {
  if (varenavn.Returnert == true) {
    returnertDiv.innerHTML = "Yes";
  } else if (varenavn.Returnert == false) {
    returnertDiv.innerHTML = "No";
  }
  vareContainer.innerHTML += `<div class="Vare">
            <div class="vare-navn">${varenavn.Vare}</div>
            <div class="vare-utleier">${varenavn.UtleierNavn}</div>
            <div class="vare-leid-ut-av">${varenavn.UtleidAv}</div>
            <div class="lengde-leid">${varenavn.LengdeLeid}</div>
            <div class="returnert">${returnertDiv.innerHTML}</div>
        </div>`;
}

for (const i in varer) {
  lageVareSeksjon(varer[i]);
}
