let sentence = "The movie is not that bad, I like it";
let not = sentence.indexOf("not");
let bad = sentence.indexOf("bad");

if (not >= 0 && bad > not) 
{
  let beforeNot = sentence.substring(0, not);
  let afterBad = sentence.substring(bad + 3);
  sentence = beforeNot + "good" + afterBad;
}
console.log(sentence);