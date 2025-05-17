
// Écouteurs pour les boutons radio
document.getElementById("daily").addEventListener("change", changerPeriode);
document.getElementById("weekly").addEventListener("change", changerPeriode);
document.getElementById("monthly").addEventListener("change", changerPeriode);

// Fonction de mise à jour des valeurs
function changerPeriode() {
  let boutonSelectionne = document.querySelector('input[type="radio"]:checked');

  if (boutonSelectionne != null) {
    let periodeChoisie = boutonSelectionne.value;

    for (let intCpt = 0; intCpt < objJSON.length; intCpt++) {
      let activite = objJSON[intCpt];
      let nomID = activite.title.toLowerCase().replace(" ", "_");

      let tempsActuel = activite.timeframes[periodeChoisie].current;
      let tempsPrecedent = activite.timeframes[periodeChoisie].previous;

      let spanActuel = document.getElementById(`temps_actuel_${nomID}`);
      let spanPrecedent = document.getElementById(`temps_precedent_${nomID}`);

      if (spanActuel && spanPrecedent) {
        spanActuel.innerText = tempsActuel;
        spanPrecedent.innerText = tempsPrecedent;
      }
    }
  }
}