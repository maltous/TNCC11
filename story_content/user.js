function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63q6C7V4YkS":
        Script1();
        break;
      case "6Hlv5aU6Eq9":
        Script2();
        break;
  }
}

function Script1()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script2()
{
  $("#tab-customlink").show();
}

