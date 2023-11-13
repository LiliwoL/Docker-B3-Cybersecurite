<!DOCTYPE html>
<html>
<head>
    <title>Cours Requêtes préparées</title>
    <meta charset="utf-8">
</head>
<body>
<h1>Bases de données MySQL</h1>
<?php
// Informations de connexion au serveur de base de données
$servname = 'mysql-requetes-preparees';
$dbname = 'pdodb';
$user = 'pdodb';
$pass = 'pdodb';

/* On imagine qu'on récupère les valeurs suivantes à partir d'un formulaire envoyé par les utilisateurs*/
$nom = "'Richard'";
$prenom = "'Pierre'";
$adresse = "'Rue de la Chèvre'";
$ville = "'Toulon'";
$cp = 83000;
$pays = "'France'";
$mail = "'gg@gmail.com'),('a','b','c','d',1,'e','f'";   // Notez ici la non conformité de l'adresse mail


global $dbh;

try{
    // Connexion à la base avec PDO
    $dbh = new PDO("mysql:host=$servname;dbname=$dbname", $user, $pass);

    // Création de la requête en utilisant les valeurs récupérées à partir du formulaire
    $sql = "INSERT INTO Clients(Nom,Prenom,Adresse,Ville,Codepostal,Pays,Mail)
                        VALUES($nom,$prenom,$adresse,$ville,$cp,$pays,$mail)";

    // Exécution réelle de la requête créée ci-dessus
    $dbh->exec($sql);

    echo 'Entrée ajoutée dans la table';
}

catch(PDOException $e){
    //$dbh->rollBack();
    echo "Requête exécutée: " . $sql;
    echo "Erreur : " . $e->getMessage();
}
?>
</body>
</html>