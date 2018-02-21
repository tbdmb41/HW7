<!DOCTYPE html>
<html lang="en">
<head>
<title>Homework 7</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<style type="text/css">
</style>

<body>
<script>

startProcess();

var length = 5;
var width = 3;
var height = 4;
var volume = 5 * 3 * 4;


document.write(getvolume);  
var result = getvolume(length, width, height);


function getvolume(length, width, height) {
    var volume = length * width * height;
        return volume;
}






</body>
</script>