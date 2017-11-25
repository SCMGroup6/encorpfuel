/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

 //Set up an associative array
 //The keys represent the size of the cake
 //The values represent the cost of the cake i.e A 10" cake cost's $35
 var Fuel_prices = new Array();
 Fuel_prices ["Diesel"]=20;
 Fuel_prices ["Super"]=25;
 Fuel_prices ["Lead-Free"]=35;

 
 
	 
	 
// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getCakeSizePrice()
{  
    var cakeSizePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["Fuelform"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedFuel = theForm.elements["selectedFuel"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedFuel.length; i++)
    {
        //if the radio button is checked
        if(selectedFuel[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice = cake_prices[selectedFuel[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice;
}

//This function finds the filling price based on the 
//drop down selection
function getQuantity()
{
    //Assume form with id="theform"
    var theForm = document.forms["Fuelform"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["quantity"];
    var howmany =0;
    //If the textbox is not blank
    if(quantity.value!="")
    {
        howmany = parseInt(quantity.value);
    }
return howmany;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cakePrice = getCakeSizePrice() + howmany() ;
    
    //display the result
   document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Cake $"+cakePrice;

}

