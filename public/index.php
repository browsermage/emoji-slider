<?php

$degrees = $_GET["degrees"] ?? 20;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emoji slider Demo | Colors of code</title>
    <link rel="stylesheet" href="./styles.css">
    <script type="module" src="./script.js"></script>
</head>
<body>
    <div id="emoji-slider">
        <img src="assets/smiling_face_with_sunglasses_3d.png" class="emoji-face">
        <input class="emoji-range" type="range" value="<?= $degrees ?>" min="-50" max="70" >
    </div>
    <footer id="footer">
        <p>MIT License Copyright &copy; <?= date("Y"); ?> Colors of code. 
            <a href="https://github.com/colorsofcode/emoji-slider" target="_blank" title="Emoji slider github repository">Github repository</a> 
            . 
            <a href="https://twitter.com/colorsofcode" target="_blank" title="Twitter account of Colors of code">Twitter</a>
        </p>
    </footer>
</body>
</html>