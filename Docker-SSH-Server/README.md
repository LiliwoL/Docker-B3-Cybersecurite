# Docker SSH Server

Un container avec un serveur SSH volontairement mal protégé.

# Informations

Port: 2222

User: user1

Password: user1

User: user2

Password: user2

# Dossiers et fichiers

- ssh_public_keys/
  - Placez y les clés publiques autorisées à se connecter au serveur

A tester avec Hydra.

Identifiants existants:

user1 et user2*

# Utilisation


- Lancement du serveur

`bin/start`


- Affichage des logs du serveur

`bin/log`


- Accès au shell du serveur

`bin/shell`


- Arrêt du serveur

bin/stop`
