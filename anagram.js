function Anagram(string) {
  this.stringLower = string.trim().toLowerCase();
  this.referenceForm = anagramMatchForm(this.stringLower);

  this.matches = function() {
    return flattenArgumentsToStringArray(arguments).
      filter(function (choice) {
        var choiceLower = choice.trim().toLowerCase();
        return this.stringLower !== choiceLower &&
               this.referenceForm === anagramMatchForm(choiceLower);
      });
  };
  return this;

  function anagramMatchForm(string) {
    return String(string).split('').sort().join('').toLowerCase();
  }

  function flattenArgumentsToStringArray(args) {
    return Array.prototype.slice.call(args).
      reduce(function (left, right) {
        return left.concat(right);
      }, []);
  }
}
