
document.getElementById('contactForm').addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        e.preventDefault();
      } else if (!email.includes('@')) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });

    // Task 4: Dynamic To-Do List
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");

      if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => li.remove();

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
      }
    }
