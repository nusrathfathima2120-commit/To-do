// Add a new task
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  // Task text
  let span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = ""; // Clear input box
}
