var wordInput = document.getElementById("word");

wordInput.addEventListener("keyup", function() {
  var matchList = document.getElementById("matches");
  while (matchList.hasChildNodes()) {
    matchList.removeChild(matchList.lastChild);
  }

  if (WORDS.indexOf(wordInput.value) != -1) {
    var word      = wordInput.value;

    var anagram = Anagram(word);
    var matches = anagram.matches(WORDS);
    for (var i = 0, len = matches.length; i < len; i++) {
      var li = document.createElement("li");
      var liText = document.createTextNode(matches[i]);
      li.appendChild(liText);
      matchList.appendChild(li); 
    }
  }
});
