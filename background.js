// Message from http://takeabreakpage.com/
chrome.alarms.onAlarm.addListener(function() {
	alert("You deserve a break! Don't forget: \n- Stretch and move around\n- Hydrate by drinking some water\n- Relax your eyes by looking out the window\n\nFrequent breaks can improve mental agility");
	chrome.alarms.clearAll();
});