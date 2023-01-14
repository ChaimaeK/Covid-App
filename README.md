# Covid-App
Ceci est un projet dans le cadre de nos études, le but étant de créer une application web manipulable directement en ligne. C’est une plateforme qui permet la mise en relation directe entre patient et centres de vaccination. Le but indispensable de notre application est d’apporter une plateforme qui permettra non seulement aux français de prendre facilement leur RDV de vaccination, mais c'est également un outil au service des personnels pour gérer les RDV, les stocks, etc.
Téchnologies : Java Spring Boot, Angular, BootSrap

## Collaborateurs
- Rehaily Mohammed-Rida : 32027956
- KHARBOUCH Chaimae: 31828592
- MARAH Abdelouahed : 32026921
- EL ALAOUI Rachid : 31923297

## Besoins fonctionnels
### Authentification
On a mis en place un système d'authentification pour permettre à l'utilisateur d'accéder au backoffice. De manière à ce que les fonctionnalités publiques liées aux patients sont accessibles sans connexion. Cependant, pour pouvoir utiliser notre backoffice, il est indispensable de se connecter pour avoir accès aux fonctionnalités autorisé à son rôle.
Pour ce faire, on s'est servit d'une configuration Spring Security appropriée qui permet une gestion d'autorisation basée sur trois principales phases :
- À la connexion, notre API génère un haché du mot de passe saisi et le compare avec selui stocké dans la BDD. Pour assurer la partie authentification,
- Ensuite, le serveur génère un tocken et l'envoie au client qui le stock et l'envoi de son tour avec chaque requête,
- Côté Api, on a spécifié des endpoints pour pour vérifier les doits d'accès; c'est à cette phase que la comparaison des tockens est faite. 

### Spécification des accès
Espace patients :
- Consulter les centres à l'aide d'une recherche par ville
- Réserver un créneau et le vaccin
Espace medecins :
- S'affecter un patient
- Valider la vaccination
Espace administrateurs du centre :
- Gérer les réservations
- Gérer les vaccins
- Gérer les medecins de son centre de vaccination
Espace super administrateurs :
- Gérer tous les centres
- Géeres les admins des centres

### File d'attente
Afin de contrôler le débit côté serveur, on a mis en place un RateLimit via Tocken Bucket, qui permet de limiter le nombre de requêtes traitées à 10 requêtes par minute. Et cela en créant une bucket qui s'incrémente après chaque requête reçue, et à la 10ème demande on se dirige vers une file d'attente.
Pour que cette configuration prends effet, il faut l'appeler à chaque endpoint et donc dans tous les controlleurs de notre application, ce que nous avons considéré comme une perte de temps et une solution inéficace, comme on sera obliger à recopier le même bout de code à chaque fois qu'on ajoute un controlleur. C'est pourquoi, on a opté pour
