function calculateGoal (obj) {
    let fieldData = obj.detail.fieldData;
  let goal = fieldData.subGoal;
  let data = obj["detail"]["session"]["data"];
  let subs = data["subscriber-total"]["count"];

  let progress = Math.floor((subs / goal) * 100);
  
  let progressBar = document.getElementById('subProgress');
  progressBar.style.width = progress + "%";
}

window.addEventListener('onEventReceived', function (obj) {
    if (!obj.detail.event) {
      return;
    }
    const listener = obj.detail.listener.split("-")[0];

    if (listener === 'subscriber') {
      calculateGoal(obj);
    }
});

window.addEventListener('onWidgetLoad', function (obj) {
    let fieldData = obj.detail.fieldData;
  let message = document.getElementById('message');
  message.innerText = fieldData.goalText;
  
  calculateGoal(obj);
});