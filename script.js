    var historyEntries = [];
    var totalAllData = 0;
    var timerInterval;
    var timerValue = 300;

    function calculateTotal() {
      var repetitions = parseInt(document.getElementById('repetitions').value) || 0;

      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      var timestamp = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

      totalAllData += repetitions;
      document.getElementById('totalAllData').innerText = 'Total Semua Data: ' + totalAllData;

      historyEntries.push({ totalRepetitions: repetitions, timestamp: timestamp });

      document.getElementById('repetitions').value = '';

      updateHistory();
    }

    function updateHistory() {
      var historyList = document.getElementById('historyList');
      historyList.innerHTML = '';

      historyEntries.forEach(function(entry) {
        var listItem = document.createElement('li');
        listItem.innerText = 'Total: ' + entry.totalRepetitions + ' pada ' + entry.timestamp;
        historyList.appendChild(listItem);
      });
    }

    function startTimer() {
      clearInterval(timerInterval);

      var hours = parseInt(document.getElementById('hours').value) || 0;
      var minutes = parseInt(document.getElementById('minutes').value) || 0;
      var seconds = parseInt(document.getElementById('seconds').value) || 0;

      timerValue = hours * 3600 + minutes * 60 + seconds;

      timerInterval = setInterval(function() {
        timerValue--;
        if (timerValue < 0) {
          clearInterval(timerInterval);
          timerValue = 0;
          updateTimerDisplay();
        } else {
          updateTimerDisplay();
        }
      }, 1000);
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function resetTimer() {
      clearInterval(timerInterval);
      timerValue = 300;
      updateTimerDisplay();
    }

    function updateTimerDisplay() {
      var timerElement = document.getElementById('timer');
      var hours = Math.floor(timerValue / 3600);
      var minutes = Math.floor((timerValue % 3600) / 60);
      var seconds = timerValue % 60;

      var formattedTime = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;

      timerElement.innerText = formattedTime;
    }
