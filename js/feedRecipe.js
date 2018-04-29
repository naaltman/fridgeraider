var dburl = "http://localhost:3000";
var dataArray= [];
var startArr = 0;

function loadAjax(){
  fetch(dburl).then(resp=>resp.json())
  .then(rsp => {
    console.log(rsp);
    while (startArr < rsp.length){
        var recTitle = "recipe_title" + startArr
        var recPicTitle = "recipe_picture" + startArr
        document.getElementById(recTitle).innerHTML = rsp[startArr].recipe
        document.getElementById(recPicTitle).src = rsp[startArr + 1].recipe
        startArr = startArr+ 2;
        if (startArr > 7){
          startArr += 1000000;
        }
  }
  })
}

document
  .addEventListener("DOMContentLoaded", loadAjax)
