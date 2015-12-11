# Test angularJS

## Prérequis

### Avec Docker 
* docker-compose up

### Sans Docker
* npm i -g gulp bower nodemon
* npm i
* bower install

## Consignes

### Vous devez coder en angularJS une application de Todo.

* Lister les todos déjà présents sur le serveur
* Créer un todo
* Editer un todo
* Passer un todo à "done"
* Supprimer un todo
* Filtrer les todos (Active / Completed)
* Vider l'ensemble des todos terminés


### Vous devez respecter les contraintes suivantes:

* Vous ne devez pas toucher au serveur


### Informations utiles: 

#### Commandes Gulp

* Lancer l'application: **gulp serve**
* Lancer les tests unitaires: **gulp test**
* Lancer les tests e2e: **gulp protractor**


### Vous disposez de l'api **REST** suivante:

* GET: **/api/todos** Pour récupérer la liste des todos
* GET: **/api/todos/:id** Pour récupérer un todo par son id
* POST: **/api/todos** Pour ajouter un todo
* POST: **/api/todos/:id** Pour modifier un todo
* POST: **/api/todos/:id** Pour supprimer un todo

## Crédits
Créé par [Sylvain CAU](https://github.com/AshDevFr)