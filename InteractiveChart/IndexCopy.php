<?php include 'serv.php' ?>



<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Interactive Chart EX</title>
    <style>
      html {
        font-family: sans-serif;
      }

      #app {
        display: flex;
        margin: 2rem 1rem;
      }

      #chart {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
      }

      #chart,
      #data {
        margin: 0 2rem;
      }

      #data ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      #data li {
        margin-bottom: 1rem;
        padding: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        width: 10rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
      }

      .bar {
        fill: #4f009e;
      }

      .label {
        fill: #4f009e;
      }
    </style>
    <script src="https://d3js.org/d3.v5.min.js" defer></script>
    <script src="https://d3js.org/d3-scale.v3.min.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/d3-axis@3" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  

    <script type = 'text/javascript' src = 'app.js'></script>
    <script type = 'text/javascript' >var DATA = <?php print_r($postData)  ?>; </script>
  </head>
  <body>
    <div id="app">
      <div id="chart">
        <svg></svg>
      </div>
      <div id="data">
        <ul></ul>
      </div>
    </div>
  </body>
</html>