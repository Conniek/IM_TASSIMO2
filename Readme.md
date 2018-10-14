## BASE SIMPLE ##

#### MAJ v3 : ####
  - Ajout adotmob
  - Factorisation tracking
  - Ajout du template "iframe"
  - Multi langue / Multi template
  - Modules JS
  - Ajout de la dev toolbar (triple clic)

#### MAJ v2.6.0 : #####
  - Remplacement de gulp-compass par gulp-sass plus rapide
  - fichier readme mis à jour
  - suppression des accents dans les fichiers scss

#### MAJ v2.5.0 : ####
  - BrowserSync pour la synchro mobile
  - maj de divers package
  - maj du xititag pour le support multilingues

> **PRE-REQUIS :**  *se reporter aux différentes installations de ces packages*
 - Node
 - Compass
 - Gulp
 

 - **Téléchargement du repertoire Git** :

Clôner ce repo en modifiant le repertoire de destination :

    git clone git@git.vpgrp.io:VP-BrandFront/BaseSimple2.git NOM_DE_PROJET

Puis

    cd NOM_DE_PROJET/

Supprimez le repertoire .git

    rm -rf .git

Créer votre repo git sur bitbucket et ajouter le comme source de votre dossier de travail

    git remote add origin git@git.vpgrp.io:VP-BrandFront/NOM_DE_PROJET.git

 - **Paramétrage**
Modifier le package.json afin de remplacer le nom du projet.

 - **Installation des packages**

Toujous dans la console

    npm install

 - Utilisation du Gulp :
	 - en mode travai: `gulp`
	 - en déploiement: `gulp compile`

Login to vp services
---------------------

Voici un exemple de comment utiliser l'objet VP present dans le DOM. Vous trouverez dans la
[DOC des webservices](docs/WS%20_Market_login_inscription.docx) des reponses a vos questions.

    <script type="text/javascript">
            document.querySelector('#form').onsubmit = function (e) {
                e.preventDefault();
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;
                console.log(email, password)
                VP.login(
                    email,
                    password,
                    function onSuccess (data) {
                        console.log('Success', data)
                    },
                    function onError(err) {
                        console.error(err)
                    }
                )
                VP.register(
                    { email: email, password: password },
                    function onSuccess (data) {
                        console.log('Success', data)
                    },
                    function onError(err) {
                        console.error(err)
                    }
                )
                return false;
            };
        </script>

> Auteur [jvenerosy](https://https://github.com/jvenerosy/)