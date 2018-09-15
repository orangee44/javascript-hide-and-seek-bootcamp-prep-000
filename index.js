
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const upRank = document.getElementById('app')
  .querySelectorAll('ul.ranked-list li');
  for (let i=0; i<upRank.length; i++) {
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n);
  }
}

function deepestChild() {
  const answer = document.getElementById('grand-node')
  .querySelectorAll('div');
  return answer[answer.length-1];
}

