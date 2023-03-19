# Docker SSH Server

Un container avec un serveur SSH volontairement mal protégé.

https://hub.docker.com/r/linuxserver/openssh-server

# Informations

Port: 2222

User: admin

Password: défini dans le fichier *credentials.txt*

# Dossiers et fichiers

- config/
  - Dossier de configuration du serveur
- ssh_public_keys/
  - Placez y les clés publiques autorisées à se connecter au serveur

A tester avec Hydra.

Identifiants existants:

admin

> Par défaut, l'utilisateur est défini avec `USER_NAME`dans le fichier *docker-compose.yml*

# Utilisation


- Lancement du serveur

`bin/start`


- Affichage des logs du serveur

`bin/log`


- Accès au shell du serveur

`bin/shell`


- Arrêt du serveur

bin/stop`
