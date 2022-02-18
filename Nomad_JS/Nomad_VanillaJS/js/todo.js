const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos()
{
	// localStorage.setItem("todos", toDos);
	localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event)
{
	const li = event.target.parentElement;
	console.log(li.id);
	// 제거 이벤트 발생한 이벤트 객체(li변수)의 id 속성과 다른 태그만 남겨두자.
	toDos = toDos.filter(toDo=> toDo.li !== parseInt(li.id));
}

function paintToDo(newTodo) // newTodo : 텍스트
{
	const li = document.createElement("li");
	const span = document.createElement("span"); // span 객체는 li 객체 안에 아직 없다.

	// append 되기 전에 버튼 생성
	const button = document.createElement("button");
	button.innerText = "❌"; // x 이모티콘 넣기 , 단순히 X 대문자 아님

	li.appendChild(span); // span을 li 태그 안에 넣기
	span.innerText = newTodo; // 받은 텍스트를 span에 넣기

	// 텍스트 뒤에 버튼 오도록 li태그 안에 span 다음으로 버튼 삽입
	li.appendChild(button);

	// 최종적으로 만들어진 li 태그를 ul 태그 안에 넣기
	toDoList.appendChild(li);

	// 버튼 클릭하면 li 삭제하는 이벤트 함수 연결
	button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = toDoInput.value; // 입력된 값을 다른 곳에 저장해 놓고
	toDoInput.value = ""; // 입력하고 엔터 누르면 값 브라우저에서 안 보이게끔 설정
	const newTodoObj = { text: newTodo, id: Date.now(), };

	toDos.push(newTodoObj);
	paintToDo(newTodo);
	saveToDos();
}

const TODOS_KEY = "todos"
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos != null) 
{
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);

}

toDoForm.addEventListener("submit", handleToDoSubmit);