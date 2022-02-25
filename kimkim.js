var $ = function (id) 
{
    return document.getElementById(id);
}
var floatBagPrice, floatTotalCost, intBagAmount; 

/*
 *start
   declare floatBagPrice, intBagAmount, floatTotalCost
   get floatBagPrice
   get intBagAmount
   calculate floatTotalCost = floatBagPrice * intBagAmount
   output floatTotalCost
  end
*/
 var calculate = function()
 {
  floatBagPrice = parseFloat($("bag_price").value);
  intBagAmount = parseInt($("bag_amount").value);
  floatTotalCost= parseFloat(floatBagPrice * intBagAmount);
  $("total_cost").value = floatTotalCost
 }
 
 window.onload = function () 
{
    $("bag_amount").value = "";
    $("calc").onclick = calculate;
    $("bag_price").focus();
    $("total_cost").value = floatTotalCost
}