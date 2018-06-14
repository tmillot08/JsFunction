function exoUn(){
  return true;
}


function exoDeux(chaine){
  return chaine
}

console.log(exoDeux("pokemon"));


function exoTrois(valeur, valeurBis){
  return valeur + valeurBis;
}


function exoQuatre(nombre, nombreBis){
  if (nombre > nombreBis) {
    return "Le premier nombre est plus grand";
  } else if (nombre < nombreBis) {
    return "Le premier nombre est plus grand";
  } else {
    return "Les deux nombre sont identiques";
  }
}

console.log(exoQuatre(5, 5));

function exoSix(nom, prenom, age){
  return "Bonjour " + nom + prenom + ",tu as " + age + " ans";
}
console.log(exoSix(" thomas", " millot", 20))


function exoSept(age, genre){
  if (genre == "Homme" && age >= 18 ) {
    return "Vous êtes un homme et vous êtes majeur";

  } else if (genre == "Homme" && age <= 18 ) {
    return "Vous êtes un homme et vous êtes mineur";

  }else if (genre == "Femme" && age >= 18 ){
    return "Vous êtes une femme et vous êtes majeur";

  }else {
    return "Vous êtes une femme et vous êtes mineur";
  }
}

console.log(exoSept(17, "Femme"));

function exoHuit(chiffre, chiffreB, chiffreC){
  return chiffre + chiffreB + chiffreC
}

console.log(exoHuit(1,2,3));
