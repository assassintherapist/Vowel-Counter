var vowels = ['a', 'e', 'i', 'o', 'u'];
var button = document.getElementById('btn');
var counter = 0;
var inputs = document.getElementById('input')

button.addEventListener('click', vowelCounter);

function vowelCounter(){
    var word = document.getElementById('input').value;
    for(w of word) {

        for(v of vowels){
            if(w.toLowerCase() == v){
                counter++
            }
        }
    }
    alert(`"${word}" has ${counter} vowels`);
    counter = 0;
    inputs.value = '';
}
