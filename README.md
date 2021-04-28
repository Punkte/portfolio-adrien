# Fonctionalités

En tant qu'utilisateur, je peux

- Voir la liste des projets  
Lorsque j'arrive sur la page d'accueil du site, je peux voir la liste des projets.  
Chaque projet a un lien "voir le projet". En cliquant sur ce bouton j'ai la possibilité de cliquer sur l'un d'eux pour accéder à la page détail.

- Voir le détail du projet  
Je peux consulter le détail d'un projet et je peux y lire :  
  * La date de création du projet
  * La description du projet
Un projet peut (ou non) avoir un lien externe pour le consulter.

- Avoir des infos sur le profil  
Je peux consulter les informations du profil : 
  * Linkedin => lorsque je clique sur le lien j'accède à la page LinkedIn du profil dans un nouvel onglet 
  * Twitter => lorsque je clique sur le lien j'accède à la page Twitter du profil dans un nouvel onglet 
  * Je peux consulter la localisation sur une carte, et naviguer dans la carte grâce à ma souris.
- Pouvoir contacter le profil  
Le formulaire de contact contient 5 champs.
  * Le champs "Nom Prenom" est obligatoire
  * Le champs "Sujet" est obligatoire
  * Le champs "Entreprise" n'est pas obligatoire
  * Le champs "Email" est obligatoire
  * Le champs "Message" est obligatoire  
Lorsque je valide mes informations une validation est faite sur tous les champs.  
Si un ou plusieurs champs n'est pas renseigné correctement, je n'ai pas la possibilité de soumettre le formulaire et une ou plusieurs erreurs apparaissent en dessous de chaque champs non valide.  


# Collaborators

* [Paartheepan RAVEENTHIRAN](https://github.com/punkte)
* [Adrien BANNWARTH](https://github.com/adrienbannwarth)
* [Etienne Mela](https://github.com/EtienneMela/)
# How to install

#### Requirements
* [Docker](https://docs.docker.com/)
* [Docker-compose](https://docs.docker.com/compose/)

#### Launch the project

Create a `.env` file and copy the content of the [.env.example](.env.example) file.  

Build images in docker-compose  
```bash
$ docker-compose build
```
Launch containers  
```bash
$ docker-compose up # -d
```

#### Launch Storybook
Go to the front directory  

Create a `.env` file and copy the content of the [.env.example](./front/.env.example) file.  

Install dependancies 
```bash
$ yarn 
```

Launch storybook
```bash
$ yarn storybook
```

