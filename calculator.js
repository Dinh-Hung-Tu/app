//This is a working version of the code. 
//More can be added. 
//Reference: http://www.codeproject.com/Tips/631525/Creating-Calculator-using-HTML-CSS-and-JavaScript
//Goal: Follow the simplistic calculator in the Window. Don't result in error. Handle the repetition. 
var clear = false;
var mr = 0;
var operator = ["+","-","*","/"];
  function c(val) //Clear and replace by val
  {
      document.getElementById("screen").value=val;
  }
  function append(val) //Append val to the end
  {
      if (clear == true) {
	  c(val); //From clear state -> register first value	  
	  clear = false;
	  }
	  else 
	  {
		 var current_display = document.getElementById("screen").value;
		 var last_press = current_display[current_display.length - 1];
		if(operator.indexOf(val)>=0 && operator.indexOf(last_press)>=0) //Change the sign if the last pressed button is sign
			{
				//current_display[current_display.length - 1] = val; Error: String in Javascript is immutable
				var char_set = current_display.split('');
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
        c(eval(document.getElementById("screen").value));
		clear = true;
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
  function reset() //reset everything (screen value and memory)
  {
	c();
	mr = 0;
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
  function m_clear()
  {
		mr = 0;
  }
  