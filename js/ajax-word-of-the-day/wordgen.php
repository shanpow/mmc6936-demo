<?php

# load each word from the system dictionary into an array
$words = file('./words.txt');

# randomly select and output a word from the array
echo $words[array_rand($words)];
die();
