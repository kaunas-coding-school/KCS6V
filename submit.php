<?php
/**
 * Created by LenovoUser.
 * Crated at: 11/3/2016 8:34 PM
 */
$vardas = $_GET['vardas'];
$pastas = $_GET['pastas'];
$zinute = $_GET['zinute'];

$masyvas = ['vardas' => $vardas, 'pastas' => $pastas,'zinute' => $zinute];

var_dump($masyvas);
//echo "<strong>Jusu duomenys iŠsaugoti...</strong>";