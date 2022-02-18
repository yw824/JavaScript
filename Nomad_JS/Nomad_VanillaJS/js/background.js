// 여기서는 img 폴더 디렉토리까지 기록하지 않고 파일명만 담는다.
// 그 이유는 나중에 설명
const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
	"3.jpg"
];

// 랜덤으로 인덱스 가져와 이미지 주소 문자열 저장하는 변수
const chosenImage = images[ Math.floor( Math.random() * images.length ) ];

// img 태그 요소를 생성
// element를 생성하였지만, javascript 파일 내에만 존재
// html 내 어디에도 속하지 않아 출력되지 않는다.
const bgImage = document.createElement("img");

// 여기서 문자열에다가 img 폴더 디렉토리까지 담아 주소 저장
bgImage.src = `img/${chosenImage}`;

// 이 bgImage 객체를 html의 body 내부에 추가하자.
document.body.appendChild(bgImage);