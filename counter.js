<script>

    $('#input').keyup(function() {
    if (!$('#form')[0].checkValidity()) {
        $('#submit').click();
    }
});
$('#button').click(function() {
    if (!$('#form')[0].checkValidity()) {
        $('#submit').click();
    }
});
    

   $('#button').click(function(){
   
});

$(document).ready(function() {
    $('#button:first').click();
})

    var ta = 0;
    var zmienna = 0;
     var ostatnia = 0; 
    var nowa = 0; 
    var nowa2 = 0; 
        var nowa = 0; 
            var zmienna2 = 0;
  function wszystko(){
      
      
      var suwak2 = document.getElementById("amountInput");
     
     if (suwak2.value >= 10000 && suwak2.value <= 500000){
      
        $("input.zakres").on('focusin', function(){
            console.log("Saving value " + $(this).val());
           $(this).data('val', $(this).val());
       });
     
    

var suwak2 = document.getElementById("amountInput");
     
   
    
            var defValue1 = suwak2.defaultValue;
            var currvalue1 = suwak2.value;
            
        
            
            if (defValue1 == currvalue1) {

                var output = document.getElementById("demo");
                 
               output.innerHTML = currvalue1; 
          
            nowa = currvalue1 * 0.07;
                
            document.getElementById("test").innerHTML = "wynik: " +currvalue1 +"wynik: " +nowa.toFixed(0);
            ta = nowa.toFixed(0);
                
            } else {
                    
                
                $('input.zakres').on('change', function(){
           var prev = $(this).data('val');
            var current = $(this).val();
            console.log("Prev value " + prev);
            console.log("New value " + current);
            var output = document.getElementById("demo");
                   
     
             
           
      
            output.innerHTML = current; 
          
            nowa = current * 0.07;
                   
            document.getElementById("test").innerHTML = "wynik: " +current +"wynik: " +nowa.toFixed(0);
            ta = nowa.toFixed(0);

       });
 
            }

            var suwak2 = document.getElementById("zakres2"); 
            var defValue = suwak2.defaultValue;
            var currvalue = suwak2.value;
           
        
            
            if (defValue == currvalue) {
                
               var output = document.getElementById("demo2");
                
               output.innerHTML = currvalue; 
          
            ostatnia = nowa.toFixed(0) * defValue;
                
          
                
               
           
             
                
                
                    var html = document.getElementById("test2").innerHTML = +ostatnia +" zł";
                
               
                        document.getElementById('result').innerHTML = html;
                
            } else {
                  
                    ostatnia = nowa.toFixed(0) * currvalue;
                    var html = document.getElementById("test2").innerHTML = +ostatnia +" zł";
                        document.getElementById('result').innerHTML = html;
                    
                 
                
              
            }
        
                             
}
  
   
  }
            
        

    
document.getElementById('button').addEventListener('click', wszystko,);
    
    
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity #amountInput');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    
</script>
