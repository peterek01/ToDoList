const toDoList = [];
const formFirst = document.querySelector("form.entryTask");
const inputTask = document.querySelector("input.first");
const inputSearch = document.querySelector("input.second");
const quantity = document.querySelector("h2 span");
const ul = document.querySelector("ul");
const liElements = document.getElementsByClassName("active");

const searchTask = (e) => {
	const searchText = e.target.value.toLowerCase();
	let tasks = toDoList;
	tasks = tasks.filter((task) =>
		task.textContent.toLowerCase().includes(searchText)
	);
	ul.textContent = "";
	tasks.forEach((li) => ul.appendChild(li));
};

const remove = (e) => {
	e.target.parentNode.remove();
	const index = e.target.parentNode.dataset.key;
	toDoList.splice(index, 1);
	quantity.textContent = liElements.length;
	renderList();
};

const addTask = (e) => {
	e.preventDefault();
	const searchText = inputTask.value;
	if (searchText === "") return alert("Dodaj produkt");
	const task = document.createElement("li");
	task.className = "active";
	task.innerHTML = "- " + searchText + "<button>remove</button>";
	toDoList.push(task);
	renderList();
	ul.appendChild(task);
	inputTask.value = "";
	quantity.textContent = liElements.length;
	task.querySelector("li.active button").addEventListener("click", remove);
	inputSearch.addEventListener("input", searchTask);
};

const renderList = () => {
	ul.textContent = "";
	toDoList.forEach((toDoElement, key) => {
		toDoElement.dataset.key = key;
		ul.appendChild(toDoElement);
	});
};

formFirst.addEventListener("submit", addTask);

// const toDoList = [];
// const form = document.querySelector("form");
// const taskNumber = document.querySelector("h2 span");
// const inputFirst = document.querySelector(".first");
// const inputSecond = document.querySelector(".second");
// const ul = document.querySelector("ul");
// const listItems = document.getElementsByClassName("task");

// const searchTask = (e) => {
// 	const liElements = toDoList;
// 	const searchText = e.target.value.toLowerCase();
// 	let tasks = [...liElements];
// 	tasks = tasks.filter((li) =>
// 		li.textContent.toLowerCase().includes(searchText)
// 	);
// 	renderList();
// 	ul.textContent = "";
// 	tasks.forEach((li) => ul.appendChild(li));
// };

// const removeTask = (e) => {
// 	e.target.parentNode.remove();
// 	const index = e.target.parentNode.dataset.key;
// 	toDoList.splice(index, 1);
// 	taskNumber.textContent = listItems.length;
// 	renderList();
// };

// const addTask = (e) => {
// 	e.preventDefault();
// 	const titleTask = inputFirst.value.toLowerCase();
// 	if (titleTask === "") return;
// 	const task = document.createElement("li");
// 	task.className = "task";
// 	task.innerHTML = "- " + titleTask + '<button class="remove">remove</button>';
// 	toDoList.push(task);
// 	renderList();

// 	ul.appendChild(task);
// 	inputFirst.value = "";
// 	taskNumber.textContent = listItems.length;

// 	task.querySelector("button.remove").addEventListener("click", removeTask);

// 	inputSecond.addEventListener("input", searchTask);
// };

// const renderList = () => {
// 	ul.textContent = "";
// 	toDoList.forEach((toDoElement, key) => {
// 		toDoElement.dataset.key = key;
// 		ul.appendChild(toDoElement);
// 	});
// };

// form.addEventListener("submit", addTask);
