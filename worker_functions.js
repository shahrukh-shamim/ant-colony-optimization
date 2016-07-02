/* For change in a specfic edge */
var edge_row;
var edge_column;
var increment;

function set_pheromone(tow)
{
	for (var i = 0; i < 11; i++)
	{
		for (var j = 0; j < 11; j++)
		{
			if ((i < j) && (myGraph[i][j] > 0))
			{
				var id = i+""+j;
				if (id=="59")
				{
					//console.log(myGraph[i][j]);
				}
				else
				{
					var obj = document.getElementById(id);
					var drops = (10*increment);
					obj.style["stroke-width"] = drops;
				}
			}
		}
	}
}

function set_edge()
{
	id = edge_row + "" + edge_column;
	if (id=="59")
	{
	}
	else
	{
		console.log(id);
		var obj = document.getElementById(id);
		var drops = (10*increment) ;
		obj.style["stroke-width"] = drops;
	}
}

if (typeof(w) == "undefined")
{
    w = new Worker("venture.js");
}

else
{
	alert("Failed");
}

w.onmessage = function(event)
{
    if (event.data.length == 3)
    {
    	edge_row = event.data[0];
    	edge_column = event.data[1];
    	increment = event.data[2];

    	set_edge(); // Set edge with delay
    }

    else
    {
    	increment = event.data;
    	set_pheromone(increment);
    }
};