let timer;
            let minutes = 25;
            let seconds = 0;
            let isPaused = false;
            let pomodorosCompleted = 0;

            const minutesDisplay = document.querySelector('.minutes');
            const secondsDisplay = document.querySelector('.seconds');
            const startButton = document.querySelector('.btn-start');
            const pauseButton = document.querySelector('.btn-pause');
            const resumeButton = document.querySelector('.btn-resume');
            const resetButton = document.querySelector('.btn-reset');
            const bellSound = document.getElementById('bell-sound');
            const pomodorosCompletedDisplay = document.getElementById('pomodoros-completed');

            startButton.addEventListener('click', startTimer);
            pauseButton.addEventListener('click', pauseTimer);
            resumeButton.addEventListener('click', resumeTimer);
            resetButton.addEventListener('click', resetTimer);

            function startTimer() {
                if (isPaused) return;
                timer = setInterval(updateTimer, 1000);
            }

            function pauseTimer() {
                clearInterval(timer);
                isPaused = true;
            }

            function resumeTimer() {
                if (!isPaused) return;
                isPaused = false;
                startTimer();
            }

            function resetTimer() {
                clearInterval(timer);
                minutes = 25;
                seconds = 0;
                isPaused = false;
                updateDisplay();
            }

            function updateTimer() {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        bellSound.play();
                        pomodorosCompleted++;
                        pomodorosCompletedDisplay.textContent = pomodorosCompleted;
                        resetTimer();
                        return;
                    }
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }

            function updateDisplay() {
                minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
                secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
            }

            // Task Manager
            const taskInput = document.getElementById('task-input');
            const addTaskButton = document.getElementById('add-task');
            const taskList = document.getElementById('task-list');

            addTaskButton.addEventListener('click', addTask);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const checkButton = document.createElement('button');
    checkButton.textContent = 'Done';
    checkButton.classList.add('btn-done');
    checkButton.style.backgroundColor = '#ff0'; // Yellow color
    checkButton.style.color = '#000';
    checkButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('btn-remove');
    removeButton.style.backgroundColor = '#f00'; // Red color
    removeButton.style.color = '#fff';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(checkButton);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}
            // Make the video section draggable
            dragElement(document.getElementById("draggable-video"));

            function dragElement(element) {
                let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                element.onmousedown = dragMouseDown;

                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    element.style.top = (element.offsetTop - pos2) + "px";
                    element.style.left = (element.offsetLeft - pos1) + "px";
                }

                function closeDragElement() {
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }

