<!DOCTYPE html>
<html>
<head>
    <title>Cours Requêtes préparées</title>
    <meta charset="utf-8">
</head>
<body>
<h1>Bases de données MySQL</h1>
<h2>Mise à jour d'un client</h2>

<?php
// Informations de connexion au serveur de base de données
$servname = 'mysql-requetes-preparees';
$dbname = 'pdodb';
$user = 'pdodb';
$pass = 'pdodb';


global $dbh;
global $sql;

try {
    // Connexion à la base avec PDO
    $dbh = new PDO("mysql:host=$servname;dbname=$dbname", $user, $pass);

    // Récupération des paramètres passés en POST
    $idClient = $_POST['id'];
    // ATTENTION, il FAUT filtrer cette valeur!!!!!!!!!!!!!

....
    // Création de la requête en utilisant la valeur issue du paramètre
    $sql = "UPDATE Clients 
            SET nom = ?,
            prenom = ?,
            WHERE id= " . $idClient;

}

catch(PDOException $e){
    //$dbh->rollBack();
    echo "Requête exécutée: " . $sql;
    echo "Erreur : " . $e->getMessage();
}
?>
</body>
</html>