var wordInput = document.getElementById("word");
var activator;

wordInput.addEventListener("keyup", function() {
  if (activator) {
    window.clearTimeout(activator);
  }

  if (wordInput.value.trim().length >= 3)
    activator = window.setTimeout(runAnagramMatch, 500);
  else
    clearMatches();
});

function clearMatches() {
  var matchList = document.getElementById("matches");
  while (matchList.hasChildNodes()) {
    matchList.removeChild(matchList.lastChild);
  }
}

function runAnagramMatch() {
  clearMatches();

  var matchList = document.getElementById("matches");
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
}
