$(document).ready(function() {
  $("#numbers form").submit(function(event) {

    var var1 = parseInt($("#countTo").val());
    var var2 = parseInt($("#countBy").val());
    alert(var1)
    alert(var2)


    if ((var1)&&(var2)){

      var elements=[];

      for (var index = var2; index <= var1; index += var2) {
        elements.push("<li>" + index + "</li>");
        alert(elements)
      }




      elements.forEach(function(element){
        $("ul#newList").append(element)

        event.preventDefault()
      });
    } else{
      alert("you forgot something")
    }


  });
  $("#sentence form").submit(function(event) {

    var words = $("input#originalSentence").val();
    var list1=words.split('')
    var vowels=["a","e","i","o","u"]
    vowels.forEach(function(vowel){
      for (var letter=0; letter < list1.length; letter += 1) {
        if (vowel===list1[letter]){
          list1[letter]="-"
        }
      }alert(list1)
    });

    var newString= "<li>" + list1.join('') + "</li>"
    alert(list1)
    $("ul#newList").append(newString)
    event.preventDefault()
  });
});
