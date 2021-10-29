// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

const contain = document.getElementById("container");

function reverse( str )
  {
    // variabile che contiene una stringa inversa
    let rev_str = "";
    for( let i = str.length-1 ;i >= 0 ;i--)
    {
      rev_str+= str[i];
    }
    // restituisce la stringa inversa
    return rev_str;
  }
 
  //  stringa della funzione che controlla se è palindroma o no
  function is_palindrome( str )
  {
    reverse_str = reverse(str);
    // verifica delle condizioni se 
    // reverse str è palindromo
    // altrimenti non è palindromo
    if( reverse_str === str)
    {
      contain.innerHTML=(" E' palindromo!");
    }
    else
    {
      contain.innerHTML=("Non è palindromo.")
    }
  }


  let test = prompt("ehy ciao scrivi una parola palindroma dai");
  is_palindrome(test);