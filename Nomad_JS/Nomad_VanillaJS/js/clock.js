// clock. js 코드 

const clock = document.querySelector("h2#clock"); 
// h2 태그와 clock 아이디 동시에 사용하는 방법


// clock.innerText = "lalalala";

function getClock()
{
    const date = new Date();

		const hours = String(date.getHours()).padStart(2,"0");
		const minutes = String(date.getMinutes()).padStart(2,"0");
		const seconds = String(date.getSeconds()).padStart(2,"0");
		
    clock.innerText = `${hours}:${minutes}:${seconds}`; 
}

getClock() ; 
setInterval(getClock, 1000 ); 
// getClock 함수를 1000ms = 1sec마다 반복