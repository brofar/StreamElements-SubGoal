var goal = 1;
var subs = 0;

function calculateGoal () {
  let progress = Math.floor((subs / goal) * 100);
  let progressBar = document.getElementById('subProgress');
  progressBar.style.width = progress + "%";
  }
  
  window.addEventListener('onEventReceived', function (obj) {
      if (!obj.detail.event) return;
      const listener = obj.detail.listener.split("-")[0];
  
      if (listener === 'subscriber') {
        //subs += obj.detail.event.amount;
        // Only add one. Multiple gift subs trigger the regular sub event x times.
        ++subs;
        calculateGoal();
      }
  });
  
  window.addEventListener('onWidgetLoad', function (obj) {
  	let fieldData = obj.detail.fieldData;
    let message = document.getElementById('message');
    
    // Init goal
    goal = fieldData.subGoal;
    
    // Init goal message
    message.innerText = fieldData.goalText;
    
    // Get the initial number of subscribers
    subs = obj["detail"]["session"]["data"]["subscriber-total"]["count"];
    
    calculateGoal();
  });