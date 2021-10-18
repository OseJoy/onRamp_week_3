// var decrease = document.querySelector('decrease');
// var increase = document.querySelector('increase');

//  decrease.addEventListener('click', decreaseFunc())
//  increase.addEventListener('click', increaseFunc())

//  function increaseFunc(){
//     let initVal
//  }

//  function decreaseFunc(){
     
//  }

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<50){
        value++;
        value = value+ " "+"People";
            document.getElementById('number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
        value = value+ " "+"People";
            document.getElementById('number').value = value;
    }else{
        value = value+ " "+"Person";
            document.getElementById('number').value = value;
    }

}