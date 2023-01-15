// CREATION DE MON BUTTON POUR LE FORMULAIRE
const buttonStart = document.createElement('button');
buttonStart.setAttribute('id','buttonStart');
buttonStart.innerHTML = 'Formulaire';
document.body.append(buttonStart);
//CREATION DE MON FORMULAIRE
const formulaire = document.createElement('form');
formulaire.setAttribute('id','formulaire');
formulaire.style.display = 'none';
//CREATION DES INPUTS POUR LE TITRE ET LE PARAGRAPHE
const titreForm = document.createElement('input');
titreForm.setAttribute('id','titreId')
titreForm.setAttribute('type', 'text');
titreForm.setAttribute('name', 'titreArticle');
titreForm.style.display = 'none';
//LA MEME CHOSE QUE AVANT
const paraForm = document.createElement('textarea')
paraForm.setAttribute('id','paraId')
paraForm.setAttribute('type', 'text');
paraForm.setAttribute('name', 'paraArticle');
paraForm.style.display = 'none';
//CREATION DU BOUTON ENVOYER 
const buttonForm = document.createElement('button');
buttonForm.setAttribute('id','buttonFormulaire');
buttonForm.innerHTML = 'envoyer';
//PLACEMENT DES ELEMENT CREER AVANT
formulaire.append(titreForm);
formulaire.append(paraForm);
formulaire.append(buttonForm);
document.body.append(formulaire);
//FUNCTION POUR METTRE LE TITRE DANS LA NAV BAR (LES ANCRES MARCHENT PAS JY ARRIVE PAS)
const nav = document.querySelector('nav');

function ajouterAncre(titre){
    let navbar = document.querySelector('.navbar-nav');
    let ancres = document.createElement('li');
    ancres.classList.add('nav-item');
    const liens = document.createElement('a');
    liens.classList.add('nav-link');
    liens.textContent = titre;
    ancres.appendChild(liens);
    navbar.appendChild(ancres);

}
//AJOUT D'UN EVENT POUR LE BOUTON POUR AFFICHER LE FORMULAIRE ET LE FERMER
buttonStart.addEventListener('click', function (s) {
    s.preventDefault();
    if (formulaire.style.display == 'none' && titreForm.style.display == 'none' && paraForm.style.display == 'none') {
        formulaire.style.display = 'block';
        titreForm.style.display = 'block';
        paraForm.style.display = 'block';
    }
    else{
        formulaire.style.display = 'none';
        titreForm.style.display = 'none';
        paraForm.style.display = 'none';
    }
});
//AJOUT D'UN EVENT POUR RECUPER LA VALEUR DES INPUTS ET LES METTRES DANS LES SECTIONS
buttonForm.addEventListener('click', function (val) {
    val.preventDefault();
    if (formulaire.style.display == 'block' && titreForm.style.display == 'block' && paraForm.style.display == 'block') {
        formulaire.style.display = 'none';
        titreForm.style.display = 'none';
        paraForm.style.display = 'none';

        const sectionTitre = document.createElement('section');
        sectionTitre.setAttribute('id','sectionTitreId')
        const sectionParagraphe = document.createElement('section');
        sectionParagraphe.setAttribute('id','sectionParagrapheId')
        ajouterAncre(titreForm.value);

        sectionTitre.innerHTML = titreForm.value;
        document.body.append(sectionTitre);
        sectionParagraphe.innerHTML = paraForm.value;
        document.body.append(sectionParagraphe);
//CREATION BOUTON SUPPRIMER POUR SUPPRIMER LES SECTION DE NOTRE ARTICLE + ON CACHE LE BUTTON APRES SUPRESSION
        let buttonRemove = document.createElement('button');
        buttonRemove.setAttribute('id','buttonRemoveId');
        buttonRemove.innerHTML = 'Supprimer Article';
        document.body.append(buttonRemove);
        buttonRemove.style.display = 'block';

        buttonRemove.addEventListener('click', function () {
            sectionParagraphe.remove();
            sectionTitre.remove();
            buttonRemove.style.display = 'none';
        });
    }
});

