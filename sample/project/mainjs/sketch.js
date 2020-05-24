var afinn;

function preload() {
  afinn = loadJSON('../mainjs/afinn111.json');
}

function setup() {
  noCanvas();
  console.log(afinn);
  
  var txt = select('#txt');
  txt.input(typing);

  function typing() {
    var textinput = txt.value();
    var words = textinput.split(/\W/);
    console.log(words);
    var scoredwords = [];
    var totalScore = 0;
    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
      if (afinn.hasOwnProperty(word)) {
        var score = afinn[word];
        console.log(word, score);
        totalScore += Number(score);
        scoredwords.push(word + ': ' + score + ' ');
      }
    }
/*
    var scorePar;
    var comp;
    var wordlist;
    element = document.getElementById('#scoreP');
    if (element != null) {
       scorePar = element.value;
       scorePar.value('score : ' + totalScore )
    }
    else {
      scorePar = null;
      scorePar.value('score : ' + totalScore )
    }
    element = document.getElementById('#comparativeP');
    if (element != null) {
      comp = element.value;
      comp.value('comparative: ' + totalScore / words.length);
    }
    else {
      comp = null;
    }
    element = document.getElementById('#wordlistP');
    if (element != null) {
      wordlist = element.value;
       wordlist.value(scoredwords);
    }
    else {
      wordlist = null;
    }

    */

    /*
    var scorePar = document.getElementById('#scoreP');
    var scoreI = totalScore;
    var scoreI = scoreI.toString();
    str = "";
    console.log(scorePar);
    console.log(scoreI);
    scorePar.value = 0;
    console.log(scorePar);
*/
    

   
    var scorePar = select('#scoreP');
    scorePar.value(totalScore);

    var comp = select('#comparativeP');
    comp.value(totalScore / words.length);

    var wordlist = select('#wordlistP');
    wordlist.value(scoredwords);


  }
}

function draw() {}
