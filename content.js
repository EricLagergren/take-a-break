NAME = "Take A Break Alarm";
MESSAGE = "PLEASE TAKE A BREAK OK??";
//TIME = 5;//document.getElementById('time').value || 5; // default to 5 minutes

document.getElementById("setter").onclick = function(e){
  tmp = document.getElementById("time").value;
  console.log(tmp);
  CreateAlarm(tmp);
};

function CreateAlarm(TIME) {
  alert(TIME);
  chrome.alarms.create(NAME, {
    "periodInMinutes": TIME
  });
}

//chrome.alarms.get(NAME, function(MESSAGE) { alert(MESSAGE); });