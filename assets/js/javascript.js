//datti 
var price_element = document.getElementById("price");
var button = document.getElementById ("button");
var name_user = document.getElementById ("name");
var ingredient = document.getElementsByClassName ("ingredient-checkbox")
var coupon = document.getElementById ("coupon")

//config
var defaultPrice = 50 ;
writePrice(defaultPrice, price_element)
var coupon_yes = ["sconto2021", "sconto_bool"]
var scont = 0.2;


//eventi
button.addEventListener("click", function(){
  //controllo nome
  var nome_inserito = name_user.value.trim();

  if (nome_inserito.value === 0){
    alert("inserisci il nome")
  //sommare gli elementi
  }else{
    var price_ingredients = 0;
    for(var i = 0; i < ingredient.length; i++){
      var ingredients = ingredient[i]
      if(ingredients.checked === true){
        price_ingredients += parseInt(ingredients.value)
      }
    }
    
    var total_prezzo = defaultPrice + price_ingredients

    //verificare il coupon
    if(coupon_yes.includes(coupon.value) === true){
      total_prezzo -= total_prezzo * scont;
    }


    //stampare prezzo
    writePrice((total_prezzo), price_element)
  }
})

//funzioni
function writePrice(value,target){
  target.innerHTML = value.toFixed(2);
}