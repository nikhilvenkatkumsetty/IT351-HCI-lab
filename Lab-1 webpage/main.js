var animals = ['TIGER', 'LION', 'PARROT', 'JAGUAR', 'DOG', 'LEOPARD', 'BUFFALO', 'HORSE', 'WHALE', 'MOOSE'];
function makeLi(array)
{
	var list = document.createElement("ul");
	list.setAttribute("id", "ele");
	for(var i = 0; i < array.length; i++)
	{
		var item=document.createElement('li');
		item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
	}
	return list;
}

function myFunction() 
{
	var btn = document.getElementById("b1");
    var parent = document.getElementById("container");
    parent.replaceChild(makeLi(animals), btn);

    var r = document.getElementById("tst");
    var sec = document.createElement("p");
    sec.setAttribute("id", "test");
    var node = document.createTextNode("You have 10 seconds to read the list.");
    sec.appendChild(node);  
	parent.replaceChild(sec, r);

    setTimeout(
     function(){

      $('#container').replaceWith($('#Div-B'));
      $('#Div-B').show();

   },
   10000
);
}
 function myFunction1()
 {
 	var c1 = document.getElementById("l1");
 	var c2 = document.getElementById("l2");
 	var c3 = document.getElementById("l3");
 	var c4 = document.getElementById("l4");
 	var c5 = document.getElementById("l5");
 	var c6 = document.getElementById("l6");
 	var c7 = document.getElementById("l7");
 	var c8 = document.getElementById("l8");
 	var c9 = document.getElementById("l9");
 	var c10 = document.getElementById("l10");
 	var c11= document.getElementById("l11");
 	var c12 = document.getElementById("l12");
 	var c13 = document.getElementById("l13");
 	var c=0;
 	if(c1.checked == true)
 	{
 		c++;
 	}
 	if(c2.checked == true)
 	{
 		c++;
 	}
 	if(c3.checked == true)
 	{
 		c++;
 	}
 	if(c4.checked == true)
 	{
 		c++;
 	}
 	if(c5.checked == true)
 	{
 		c++;
 	}
 	if(c6.checked == true)
 	{
 		c++;
 	}
 	if(c7.checked == true)
 	{
 		c++;
 	}
 	if(c8.checked == true)
 	{
 		c++;
 	}
 	if(c9.checked == true)
 	{
 		c++;
 	}
 	if(c10.checked == true)
 	{
 		c++;
 	}
 	if(c11.checked == true)
 	{
 		c++;
 	}
 	if(c12.checked == true)
 	{
 		c++;
 	}

 	var t = 0;
 	if(c1.checked == true)
 	{
 		t++;
 	}
 	if(c2.checked == true)
 	{
 		t++;
 	}
 	if(c3.checked == true)
 	{
 		t++;
 	}
 	if(c6.checked == true)
 	{
 		t++;
 	}
 	if(c7.checked == true)
 	{
 		t++;
 	}
 	if(c8.checked == true)
 	{
 		t++;
 	}
 	if(c9.checked == true)
 	{
 		t++;
 	}
 	if(c10.checked == true)
 	{
 		t++;
 	}
 	if(c12.checked == true)
 	{
 		t++;
 	}
 	if(c13.checked == true)
 	{
 		t++;
 	}
 	var tp = 0;
 	if(c7.checked == true)
 	{
 		tp++;
 	}
 	if(c8.checked == true)
 	{
 		tp++;
 	}
 	if(c1.checked==true)
 	{
 		tp++;
 	}
 	var bt=0;
 	if(c9.checked == true)
 	{
 		bt++;
 	}
 	if(c10.checked == true)
 	{
 		bt++;
 	}
 	if(c12.checked==true)
 	{
 		bt++;
 	}
 	var res = t*10;
 	document.getElementById("header").innerHTML="RESULTS:";
 	document.getElementById("list1").innerHTML = "Correct animals = " + String(t) + "/10 animals.\n\n"+ "Recall % = "+res+ "%.\n\nAnimals from top 3 = " + tp+ ".\n\nAnimals from bottom 3 = " + bt+".\n\n";

 }