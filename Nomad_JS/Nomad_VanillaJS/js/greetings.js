// Script . js 코드 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting"); // greeting 표시할 태그 아이디명으로 구하기
const HIDDEN_CLASSNAME = "hidden" // hidden 이라는 클래스를 매번 문자열로 쓰지 않도록 변수로 설정

// username 이라는 문자열을 문자열 변수로 고정시키자.
const USERNAME_KEY = "username";

function onLoginSubmit( event ) {
	event.preventDefault(); // 디폴트 작업을 멈추는 것
	
	const username = loginInput.value;
	
	localStorage.username= loginInput.value;

	loginForm.classList.add(HIDDEN_CLASSNAME);
	console.log(username);
	paintGreetings(username);
}

function paintGreetings(username)
{
	greeting.innerText = `Hello, ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 있으면 그 값 , 없으면 null
console.log(savedUsername);

if(savedUsername === null ) // localStorage 에 이미 저장된 로그인 값 없으면
{
	loginForm.classList.remove(HIDDEN_CLASSNAME); // form 태그의 hidden 클래스 없애기
	loginForm.addEventListener("submit", onLoginSubmit);
} else // 이미 저장된 로그인 값 있으면
{
	// 클래스명 없어도 greeting 안의 텍스트 없으므로 추가해 줘야 함
	paintGreetings(savedUsername);
}