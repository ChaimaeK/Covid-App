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
Pour ce faire, on s'est servit d'une configuration Spring Security aproprié 

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
### 
