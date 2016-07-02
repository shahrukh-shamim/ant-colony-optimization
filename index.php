<?php

	if (isset($_POST['Compute']))
	{
		$A = $_POST['start'];
		$B = $_POST['target'];

		$output = "";
		$worker = "evaporation.js";
		if ($handle = fopen($worker, "r"))
		{
			$output .= "var starting_node = \"" . $A . "\";\n" ;
			$output .= "var target_node   = \"". $B . "\";\n";
			$output .= fread($handle, filesize("evaporation.js"));
			fclose($handle);
		}

		else
		{
			echo "Failed to initiate";
		}

		$file = "venture.js";

		if ($handle = fopen($file, "w"))
		{
			fwrite($handle, $output);
			fclose($handle);
		}
		else
		{
			echo "Failed to initiate<br/>";
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Ant Colony Optimization</title>

	<link rel="stylesheet" type="text/css" href="style.css">
	<?php
		if (isset($_POST['Compute']))
		{
			echo "<script type=\"text/javascript\" src=\"matrices.js\"></script>";
			echo "<script type=\"text/javascript\" src=\"worker_functions.js\"></script>";
		}
	?>
	<script type="text/javascript" src="script.js"></script>
	
</head>

<body>
	<h1>Ant Colony Optimization<br>Made By SHAHRUKH SHAMIM</h1>

	Starting node <label id="start" name="start" ><?php
	echo isset($_POST['start']) ? $_POST['start']:"";
	?></label><br>
	
	Target node <label id="target" name="target" >
	<?php
		echo isset($_POST['target']) ? $_POST['target']:"";
	?>
	</label>
	
	<div>
	
	<svg>

	<!-- Nodes -->

	<!-- Node A -->
	<g onclick="myfunc('A')">
		<circle cx="50" cy="200" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="45" y="205" fill="blue">A</text>
	</g>

	<!-- Node B -->
	<g onclick="myfunc('B')">
		<circle cx="220" cy="70" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="215" y="75" fill="blue">B</text>
	</g>

	<!-- Node C -->
	<g onclick="myfunc('C')">
		<circle cx="160" cy="350" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="155" y="355" fill="blue">C</text>
	</g>

	<!-- Node E -->
	<g onclick="myfunc('E')">
		<circle cx="500" cy="70" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="495" y="75" fill="blue">E</text>
	</g>

	<!-- Node D -->
	<g onclick="myfunc('D')">
		<circle cx="280" cy="220" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="275" y="225" fill="blue">D</text>
	</g>

	<!-- Node F -->
	<g onclick="myfunc('F')">
		<circle cx="500" cy="220" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="495" y="225" fill="blue">F</text>
	</g>

	<!-- Node G -->
	<g onclick="myfunc('G')">
		<circle cx="410" cy="320" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="405" y="325" fill="blue">G</text>
	</g>

	<!-- Node H -->
	<g onclick="myfunc('H')">
		<circle cx="640" cy="290" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="635" y="295" fill="blue">H</text>
	</g>

	<!-- Node I -->
	<g onclick="myfunc('I')">
		<circle cx="600" cy="410" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="595" y="415" fill="blue">I</text>
	</g>

	<!-- Node J -->
	<g onclick="myfunc('J')">
		<circle cx="750" cy="140" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="745" y="145" fill="blue">J</text>
	</g>

	<!-- Node K -->
	<g onclick="myfunc('K')">
		<circle cx="750" cy="340" r="25" stroke="green" stroke-width="2" fill="yellow" />
		</circle>
		<text x="745" y="345" fill="blue">K</text>
	</g>

	<!-- Edges and pheromones -->

	<!-- Edges and pheromone from A to B -->
	<line x1="65" y1="180" x2="210" y2="95" style="stroke:rgb(0,0,0);stroke-width:1" />
	<line id="01" stroke-linecap="round" stroke-dasharray="1, 15" x1="65" y1="180" x2="210" y2="95" style="stroke:rgb(255,0,0);stroke-width:0" />
	
	<!-- Edges and pheromone from A to C -->
	<line x1="50" y1="225" x2="135" y2="350" style="stroke:black;stroke-width:1" />
	<line id="02" stroke-linecap="round" stroke-dasharray="1, 15" x1="50" y1="225" x2="135" y2="350" style="stroke:rgb(255,0,0);stroke-width:0" />

	<!-- Edges and pheromone from B to E -->
	<line x1="245" y1="70" x2="475" y2="70" style="stroke:rgb(0, 0, 0);stroke-width:1" />
	<line id="14" stroke-linecap="round" stroke-dasharray="1, 15" x1="245" y1="70" x2="475" y2="70" style="stroke:rgb(255,0,0);stroke-width:0" />

	 <!-- Edges and pheromone from C to D -->
	<line x1="265" y1="240" x2="170" y2="328" style="stroke:black;stroke-width:1" />
	<line id="23" stroke-linecap="round" stroke-dasharray="1, 15" x1="265" y1="240" x2="170" y2="328" style="stroke:red;stroke-width:0" />

	<!-- Edges and pheromone from C to I -->
	<line x1="185" y1="350" x2="574" y2="410" style="stroke:black;stroke-width:1" />
	<line id="28" stroke-linecap="round" stroke-dasharray="1, 15" x1="185" y1="350" x2="574" y2="410" style="stroke:rgb(255,0,0);stroke-width:0" />

	<!-- Edges and pheromone from D to E -->
	<line x1="490" y1="92" x2="300" y2="205" style="stroke:rgb(0, 0, 0);stroke-width:1" />
	<line id="34" stroke-linecap="round" stroke-dasharray="1, 15" x1="490" y1="92" x2="300" y2="205" style="stroke:rgb(255,0,0);stroke-width:0" />

	<!-- Edges and pheromone from D to F -->
	<line x1="475" y1="220" x2="305" y2="220" style="stroke:rgb(0, 0, 0);stroke-width:1" />
	<line id="35" stroke-linecap="round" stroke-dasharray="1, 15" x1="475" y1="220" x2="305" y2="220" style="stroke:rgb(255, 0, 0);stroke-width:0" />

	<!-- Edges and pheromone from E to H -->
	<line x1="640" y1="265" x2="500" y2="95" style="stroke:rgb(0, 0, 0);stroke-width:1" />
	<line id="47" stroke-linecap="round" stroke-dasharray="1, 15" x1="640" y1="265" x2="500" y2="95" style="stroke:rgb(255, 0, 0);stroke-width:0" />

	<!-- Edges and pheromone from F to G -->
	<line x1="410" y1="295" x2="500" y2="245" style="stroke:rgb(0, 0, 0);stroke-width:1" />
	<line id="56" stroke-linecap="round" stroke-dasharray="1, 15" x1="410" y1="295" x2="500" y2="245" style="stroke:rgb(255, 0, 0);stroke-width:0" />

	<!-- Edges and pheromone from G to H -->
	<line x1="435" y1="320" x2="615" y2="290" style="stroke:rgb(0, 0, 0);stroke-width:1" />
	<line id="67" stroke-linecap="round" stroke-dasharray="1, 15" x1="435" y1="320" x2="615" y2="290" style="stroke:rgb(255, 0, 0);stroke-width:0" />

	<!-- Edges and pheromone from H to I -->
	<line x1="665" y1="295" x2="725" y2="140" style="stroke:rgb(0, 0, 0);stroke-width:1" />
	<line id="78" stroke-linecap="round" stroke-dasharray="1, 15" x1="665" y1="295" x2="725" y2="140" style="stroke:rgb(255, 0, 0);stroke-width:0" />

	<!-- Edges and pheromone from I to K -->
	<line x1="625" y1="410" x2="725" y2="340" style="stroke:rgb(0, 0, 0);stroke-width:1" />
	<line id="810" stroke-linecap="round" stroke-dasharray="1, 15" x1="625" y1="410" x2="725" y2="340" style="stroke:rgb(255, 0, 0);stroke-width:0" />
	
	<!-- Edges and pheromone from J to K -->
	<line x1="750" y1="315" x2="750" y2="165" style="stroke:rgb(0, 0, 0);stroke-width:1" />
	<line id="910" stroke-linecap="round" stroke-dasharray="1, 15" x1="750" y1="315" x2="750" y2="165" style="stroke:rgb(255, 0, 0);stroke-width:0" />

	</svg> <!-- End of svg tag -->

	</div>

	<div id="form">
		<button name="submit" onclick="test()" <?php 
			echo isset($_POST['Compute']) ? "disabled" : "";
		?> >Compute</button>
		<button type="button" name="submit" onclick="" <?php 
			echo isset($_POST['Compute']) ? "" : "disabled";
		?>>Venture</button>
		<button id="2" type="button" name="submit" onclick="pause_resume()" >Pause</button>
		<button type="button" name="Reset" onclick="reset_ACO()" >Reset</button>
	</div>
</body>
</html>