function romanos(numero){

    const romanos = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }
   
    let resultado = ""
    for (let r in romanos) {
     
      while(numero>=romanos[r]){
          resultado=resultado+r;
          
          numero=numero - romanos[r]
          
      }
      
    }
    
    return resultado

	
   }

   function funcionClick() {
    alert('Se ha dado clic al botón!');
    let num= document.getElementById("numero").value;

    document.getElementById("salida").value=romanos(num);


  }


   
   