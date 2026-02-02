function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function findLongestWord(text) {
  return text.split(/\s+/).reduce((longest, word) =>
    word.length > longest.length ? word : longest, "");
}

function countLines(text) {
  return text.split(/\n/).length;
}

module.exports = { countWords, findLongestWord, countLines };