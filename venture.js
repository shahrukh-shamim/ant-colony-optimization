var starting_node = "E";
var target_node   = "A";

var A; var B;
var myGraph = 
[
	[  0, 15, 18,  0,  0,  0, 0, 0,  0,  0, 0 ],
	[ 15,  0,  0,  0,  9,  0, 0, 0,  0,  0, 0 ],
	[ 18,  0,  0,  6,  0,  0, 0, 0, 19,  0, 0 ],
	[  0,  0,  6,  0, 11,  7, 0, 0,  0,  0, 0 ],
	[  0,  9,  0, 11,  0,  0, 0, 5,  0,  0, 0 ],
	[  0,  0,  0,  7,  0,  0, 4, 0,  0,  0, 0 ],
	[  0,  0,  0,  0,  0,  4, 0, 9,  0,  0, 0 ],
	[  0,  0,  0,  0,  5,  0, 9, 0,  7,  0, 0 ],
	[  0,  0, 19,  0,  0,  0, 0, 7,  0,  0, 8 ],
	[  0,  0,  0,  0,  0,  0, 0, 0,  0,  0, 5 ],
	[  0,  0,  0,  0,  0,  0, 0, 0,  8,  5, 0 ]
];

var nearness = 
[
	[            0, 0.0666666666, 0.0555555555,            0,            0,            0,            0,            0,            0,            0,     0 ],
	[            0,            0,            0,            0, 0.1111111111,            0,            0,            0,            0,            0,     0 ],
	[ 0.0555555555,            0,            0, 0.1666666666,            0,            0,            0,            0, 0.0526315789,            0,     0 ],
	[            0,            0, 0.1666666666,            0, 0.0909090909, 0.1428571429,            0,            0,            0,            0,     0 ],
	[            0, 0.1111111111,            0, 0.0909090909,            0,            0,            0,          0.2,            0,            0,     0 ],
	[            0,            0,            0, 0.1428571429,            0,            0,         0.25,            0,            0,            0,     0 ],
	[            0,            0,            0,            0,            0,         0.25,            0, 0.1111111111,            0,            0,     0 ],
	[            0,            0,            0,            0,          0.2,            0, 0.1111111111,            0, 0.1428571429,            0,     0 ],
	[            0,            0, 0.0526315789,            0,            0,            0,            0, 0.1428571429,            0,            0, 0.125 ],
	[            0,            0,            0,            0,            0, 0.0833333333,            0,            0,            0,            0,   0.2 ],
	[            0,            0,            0,            0,            0,            0,            0,            0,        0.125,          0.2,     0 ]
];

var tow = [
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ,
	  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
 ];

var indexes = { "A":0, "B":1, "C":2, "D":3, "E":4, "F":5, "G":6, "H":7, "I":8, "J":9, "k":10 };

var nodes = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "k" ];

var clock = 0; // global clock
var counter=0; // global time stamp

function isPendent(n0de)
{
	var degree=0;
	for (var i = 0; i < myGraph[n0de].length; i++)
	{
		if (myGraph[n0de][i] > 0)
		{
			degree++;
		}
	}

	return degree == 1 ? true : false;
}

function update_pheromone()
{
	if (A > B) {	  temp = A; A = B; B = temp;   }

	tow[A][B] += nearness[A][B];

	
	var message = [A, B, tow[A][B]];

	postMessage(message);
}

function evaporate()
{
	for (var i = 0; i < 11; i++)
	{
		for (var j = 0; j < 11; j++)
		{
			if ((i < j) && (myGraph[i][j] > 0))
			{
				tow[i][j] = tow[i][j]*0.7;
			}
		}
	}
}

function new_ants()
{
	var current = starting_node;
	var ants = [current];
	var time = 0;

	while ((current != target_node) && (ants.length < 15))
	{
		var set_of_nodes = tow[indexes[current]];
		var exploration = Math.max.apply(Math, set_of_nodes) == 0;
		var choice;

		if (exploration == true) // no pheromone trail hence we will go randomly
		{
			var possible_node = []; //

			for (var i = 0; i < myGraph[indexes[current]].length; i++)
			{
				if ((myGraph[indexes[current]][i] > 0) && ((indexes[ants[ants.length-2]]) != i || isPendent(indexes[current])))
				{
					possible_node[possible_node.length] = i;
				}
			}
			choice = possible_node[Math.round(Math.random()*(possible_node.length-1))];
		}

		else // else we will follow pheromone trails on edges
		{
			var prob_chart = new Array(); 
			var append_prob = 0; // To add to each probability to make ranges
			sum = 0;

			for (var i = 0; i < tow[indexes[current]].length; i++)
			{
				var pheromone_drops; // stores pow(tow[current][i],alpha)*pow(nearness[current][i],beta)
				if ((myGraph[indexes[current]][i] > 0) && ((indexes[ants[ants.length-2]]) != i || isPendent(indexes[current])))
				{
					var row = indexes[current]; column = i;
					if (row > column) { row = i; column=indexes[current]; }
					pheromone_drops = Math.pow(tow[row][column],0.8) * Math.pow(nearness[row][column], 0.8);
					pheromone_drops = pheromone_drops == 0 ? 0.01 : pheromone_drops;
					sum += pheromone_drops;
					prob_chart[prob_chart.length] = [nodes[i] , pheromone_drops];
				}
			}

			for (var i = 0; i < prob_chart.length; i++)
			{
				prob_chart[i][1] = append_prob + (prob_chart[i][1] / sum);
				append_prob += prob_chart[i][1];
			}

			var pick = Math.random();

			var lowerBound = 0;
			for (var i = 0; i < prob_chart.length; i++)
			{
				if ((pick > lowerBound ) && (pick <= prob_chart[i][1])) { pick = prob_chart[i][0]; break;}
				lowerBound = prob_chart[i][1];
			}

			choice = indexes[pick];

		}

		time = myGraph[indexes[current]][choice]*50; // Transition time
		current = nodes[choice]; // modify current
		ants[ants.length] = nodes[choice]; // Add next node on path
		clock += time; // Modify Global clock

		if (Math.floor(clock / 2000) > counter) // 3 time stamps since last counter
		{
			var counter_change = Math.floor(clock / 3000) - counter ;
			for (var i = 1; i < counter_change; i++)
			{
				counter++;
				evaporate();
			}

			postMessage(tow);
		}

		A = indexes[ants[ants.length-2]]; B = indexes[ants[ants.length-1]];

		setTimeout(update_pheromone, time); //delTow
	}

	setTimeout(new_ants, time); // Another Ant within time as
}

new_ants();