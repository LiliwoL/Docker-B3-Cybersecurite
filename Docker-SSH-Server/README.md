# Docker SSH Server

Un container avec un serveur SSH volontairement mal protégé.

## Paquets installés

- zsh
- iptable2 (ss)
- openssh-server
- vim


# Informations

- IP:   selon la machine qui héberge
- Port: 2222

Utilisateurs
- User: user1
- Password: user1


- User: user2
- Password: user2

- User: nicolas
- Password: `Passw@rd`

# Dossiers et fichiers

- ssh_public_keys/
  - Placez-y la clé publique autorisée à se connecter au serveur et nommez la **id_rsa_prof.pub**


# A tester avec Hydra ou un script Bruteforce en python

Identifiants existants:
user1 et user2

# Utilisation

- Lancement du serveur

`bin/start`


- Affichage des logs du serveur

`bin/log`


- Accès au shell du serveur

`bin/shell`


- Arrêt du serveur

`bin/stop`
