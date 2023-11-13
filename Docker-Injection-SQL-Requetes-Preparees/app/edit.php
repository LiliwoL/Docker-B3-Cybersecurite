<!DOCTYPE html>
<html>
<head>
    <title>Cours Requêtes préparées</title>
    <meta charset="utf-8">
</head>
<body>
<h1>Bases de données MySQL</h1>
<h2>Affichage d'un client</h2>

<?php
// Informations de connexion au serveur de base de données
$servname = 'mysql-requetes-preparees';
$dbname = 'pdodb';
$user = 'pdodb';
$pass = 'pdodb';


global $dbh;
global $sql;

try{
    // Connexion à la base avec PDO
    $dbh = new PDO("mysql:host=$servname;dbname=$dbname", $user, $pass);

    // Récupération du paramètre passé en GET
    $idClient = $_GET['id'];
    // ATTENTION, il FAUT filtrer cette valeur!!!!!!!!!!!!!

    // Création de la requête en utilisant la valeur issue du paramètre
    $sql = "SELECT * FROM Clients WHERE id= " . $idClient;

    // Exécution réelle de la requête créée ci-dessus
    $statement = $dbh->query($sql);

    // Récupération du résultat de la requête
    $client = $statement->fetch();

    //var_dump($client);

    // Affichage du formulaire
    echo "<form action='update.php' method='post'>";

        // Template d'affichage du formulaire
        $format = '
            <input name="id" value="%s" type="hidden"/>
            
            <label for="nom">Nom:</label>
            <input name="nom" value="%s" type="text"/>
            
            <label for="prenom">Prenom:</label>
            <input name="prenom" value="%s" type="text"/>
        ';

        // Préparation du formulaire avec sprintf
        $clientForm = sprintf(
            $format,
            $client['Id'],
            $client['Nom'],
            $client['Prenom']
        );
        echo $clientForm;

        // Bouton de validation
        echo '<input type="submit" value="Modifier"/>';
    echo "</form>";
}

catch(PDOException $e){
    //$dbh->rollBack();
    echo "Requête exécutée: " . $sql;
    echo "Erreur : " . $e->getMessage();
}
?>
</body>
</html>