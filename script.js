var check=false;
var both = false;

function myfunc(node)
{
	if(check == false)
	{
		document.getElementById('start').innerHTML = node;	
		check = true;			
	}
	else if((check == true) && !both)
	{
		document.getElementById('target').innerHTML = node;	
		both = true;
	}

	else
	{
		document.getElementById('start').innerHTML = "";
		document.getElementById('target').innerHTML = "";
		check = both = false;
	}
}

function test()
{
	console.log("Entered test()");
	if (!both)
	{
		if (!check)
		{
			alert("Oops ! You didn't select starting and target node");
			return false;
		}

		alert("Oops ! You didn't select target node");
		return false;
	}

    var start_Node = document.getElementById('start').innerHTML;
    var target_Node = document.getElementById('target').innerHTML;
    console.log(start_Node+""+target_Node+"selected");
	var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "index.php");
    //form.setAttribute("target", "_blank");

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("name", "start");
    hiddenField.setAttribute("value", start_Node);
    hiddenField.setAttribute("type", "hidden");

    var hiddenField2 = document.createElement("input");
    hiddenField2.setAttribute("name", "target");
    hiddenField2.setAttribute("value", target_Node);
    hiddenField2.setAttribute("type", "hidden");

    var hiddenField3 = document.createElement("input");
    hiddenField3.setAttribute("name", "Compute");
    hiddenField3.setAttribute("type", "hidden");

    form.appendChild(hiddenField);
    form.appendChild(hiddenField2);
    form.appendChild(hiddenField3);

    document.body.appendChild(form);

    form.submit();
}

function pause_resume()
{
	if (document.getElementById('2').innerHTML == "Pause")
	{
		document.getElementById('2').innerHTML = "Resume";
	}

	else
	{
		document.getElementById('2').innerHTML = "Pause";
	}
}

function reset_ACO()
{
	
	window.location = "ant-colony-optimization/index.php";
}

function sum(array)
{
	var temp = 0;

	for (var i = 0; i < array.length; i++)
	{
		temp += array[i];
	}

	return temp;
}
