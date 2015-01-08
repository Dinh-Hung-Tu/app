//This is a working version of the code. 
//More can be added. 
//Reference: http://www.codeproject.com/Tips/631525/Creating-Calculator-using-HTML-CSS-and-JavaScript
//Goal: Follow the simplistic calculator in the Window. Don't result in error. Handle the repetition. 
var clear = false;
var mr = 0;
  function c(val) //Clear and replace by val
  {
      document.getElementById("screen").value=val;
  }
  function append(val) //Append val to the end
  {
      if (clear == true) c(val);
	  else document.getElementById("screen").value+=val;
	  clear = false;	  	  
  }
  function get_result() 
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
  function m_recall() //Call the memory
  {
	c(mr);
  }
  function m_add() //add to the memory
  {
      try 
      { 
        var val = eval(document.getElementById("screen").value);
		if (isNaN(val) == false) mr += val;
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