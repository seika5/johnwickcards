var cards1 = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);
var cards2 = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);

function shuffle(array) {
  var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

  return array;
}

function flip() {
  console.log(cards);
}

function docWrite(id, variable) {
  document.getElementById(id).innerHTML=variable;
}