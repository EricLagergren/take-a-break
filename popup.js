NAME = "Take A Break Alarm";

document.getElementById("setter").onclick = function(e){
  CreateAlarm(+document.getElementById("time").value);
};

document.getElementById("remover").onclick = function(e){
  RemoveAlarm();
};

function CreateAlarm(TIME) {
  chrome.alarms.create(NAME, {
    "periodInMinutes": TIME
  });
}

function RemoveAlarm() {
  chrome.alarms.clearAll();
}