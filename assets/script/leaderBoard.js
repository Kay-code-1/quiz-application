var scoreTable = document.getElementById("score-table");
var quiz = JSON.parse(localStorage.getItem("quiz"));

scoreTable.innerHTML = "";
if (quiz) {
  for (var i = 0; i < quiz.length; i++) {
    var trow = document.createElement("tr");
    var tname = document.createElement("td");
    tname.innerHTML = quiz[i].name;
    var tscore = document.createElement("td");
    tscore.innerHTML = quiz[i].score;
    trow.appendChild(tname);
    trow.appendChild(tscore);

    scoreTable.appendChild(trow);
  }
} else {
  var trow = document.createElement("tr");
  var tdata = document.createElement("td");
  tdata.setAttribute("colspan", "2");
  tdata.innerHTML = "No quiz data found!";
  scoreTable.appendChild(trow);
}
