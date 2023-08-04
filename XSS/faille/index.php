<?php
    // Le site stocke le cookie de cette manière
    //setcookie("information", "donnees perso contenues dans un cookie", time()+3600);

    // La ligne ci-dessus est ici masquée pour ajouter du piment au jeu
    eval(base64_decode("c2V0Y29va2llKCJpbmZvcm1hdGlvbiIsICJkb25uZWVzIHBlcnNvIGV0IHRyw6hzIHNlY3LDqHRlcy4gRkxBRyAtLS0+IERBSVNZIiwgdGltZSgpKzM2MDApOw=="));

    // On traite le formulaire de façon non sécurisée
    if( isset($_GET['prenom']) && !empty($_GET['prenom']) )
    {
        // On ne protège pas l'accès aux données
        $prenom = $_GET['prenom'];
    }
?>

    <form method="get">
        <input type="text" name="prenom">
        <button>Valider</button>
    </form>

<?php
    // On affiche la saisie du formulaire
    if(isset($prenom)){
        echo $prenom;
    }