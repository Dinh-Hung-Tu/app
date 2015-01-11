//This is a working version of the code. 
//More can be added. 
//Reference: http://www.codeproject.com/Tips/631525/Creating-Calculator-using-HTML-CSS-and-JavaScript
//Goal: Follow the simplistic calculator in the Window. Don't result in error. Handle the repetition. 
//to fix: fix the display of text, try to get the text scroll. If possible make two lines Make the screen is immutable.
var clear = true;
var mr = 0;
var operator = ["+","-","x","/"];
	
  function c(val) //Clear and replace by val
  {	
      document.getElementById("screen").value=val;	  	  
  }
  function append(val) //Append val to the end
  {
      if (clear == true ) {		//In clear screen
		if (val != "x" && val != "/") {

	  c(val); //From clear state -> register first value	  
	  clear = false;
}
	  }	  
	  else
	  {
		var current_display = document.getElementById("screen").value;
		var char_set = current_display.split('');
		var last_press = current_display[current_display.length - 1];
		
		if(operator.indexOf(val)>=0 && operator.indexOf(last_press)>=0) //Change the sign if the last pressed button is sign
			{
				//current_display[current_display.length - 1] = val; Error: String in Javascript is immutable				
				
				char_set[current_display.length - 1] = val;
				document.getElementById("screen").value = char_set.join("");
			}				
		else document.getElementById("screen").value += val;		
		clear = false;	//has some content		
		
  }
  }
  function get_result() 
  { 
	if (clear == false)
	{
      try 	  
      { 
		var current_display = document.getElementById("screen").value;
		var char_set = current_display.split('');
		while (char_set.indexOf("x")>=0)
		{
			char_set[char_set.indexOf("x")] = "*";
		}
		result = eval(char_set.join(""));
        c(result.toString());
		//clear = true;
      } 
      catch(e) 
      {
        c('Error');
		clear = true;
      } 
	}
  }
  function m_recall() //Call the memory
  {
	c(mr);
  }
  function m_add(sign) //add to the memory
  {	
      try 
      { 
        var val = eval(document.getElementById("screen").value);				
		if (isNaN(val) == false) 
		{
			if (sign == "+") mr += val;
			else mr -= val;
		}
		else c('Error');
      } 
      catch(e) 
      {
        c('Error') 
		clear = true;
      } 
  }
  function reset1() //reset everything (screen value and memory)
  {
	console.log("Reset");
	c("");	
	clear = true;
  }

function toggle() //toggle the sign
  {
	var current_display = document.getElementById("screen").value;
	var char_set = current_display.split('');

	if (char_set[0] == "-") 
	{
		char_set[0] = ""		  
	} //if negative precede
	else if (char_set[0] == "+") //if positive precede
	{
		char_set[0] = "-"
	}
	else //if none preceed
	{
		char_set.unshift("-");		
	}
	document.getElementById("screen").value = char_set.join("");
  }

function m_clear() //Clear memory
  {
		mr = 0;
  }
  document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
	var keycode = e.keyCode;
	console.log(keycode);
    if (keycode == '38') {
        // up arrow
		console.log("Up");
    }
    else if (keycode >= 48 && keycode <= 57) //Letters A to Z and standard numbers 0 to 9
	{
		var digit = keycode - 48;		
		append(digit.toString());
	}		
	else if (keycode >= 96 && keycode <= 105) //Letters A to Z and standard numbers 0 to 9
	{
		var digit = keycode - 96;
		append(digit.toString());
	}	
	else if (keycode == 106) append("*"); //
	else if (keycode == 107 || keycode == 187) append("+"); //
	else if (keycode == 109 || keycode == 189) append("-"); //
	else if (keycode == 110 || keycode == 190) append("."); //decimal 
	else if (keycode == 111 || keycode == 191) append("/"); //
	else if (keycode == 13) {//Enter
	get_result(); 
	e.preventDefault();
	}
	else if (keycode == 8) { //Backspace
	clear_last(); 
	e.preventDefault();
	}
}
function clear_last()
{
	var current_display = document.getElementById("screen").value;
	var char_set = current_display.split('');
	char_set.pop();
	document.getElementById("screen").value = char_set.join("");
}