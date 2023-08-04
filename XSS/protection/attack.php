<h1>Affichage d'un cookie distant</h1>
<?php
    if ( isset($_GET['cookie']) ){
        echo "Cookie: " . $_GET['cookie'];
    }else{
        echo "Rien reçu";
    }