console.log("Menu");
console.log("1. 아아");
console.log("2. 라떼");
console.log("3. 카푸치노");
console.log("4. 티");

//횟수를 셀 변수를 선언하고 초기화
var count =0; 
// while반복문을 이용해서 count가 3 미만일 동안만 수행하도록 설정
while (count <3){
var choice = parseInt(prompt("메뉴를 선택해주세요."));
console.log(choice + "번 메뉴를 선택하셨습니다.");


switch (choice){
  case 1:
  console.log("아아는 1500원 입니다.");
  break;

  case 2:
  console.log("라떼는 1600원 입니다.");
  break;

  case 3:
  console.log("카푸치노는 1300원 입니다.");
  break;
  
  case 4:
  console.log("티는 1100원 입니다.");
  break;


  default:
  console.log("죄송합니다 그런 메뉴는 없습니다.");
  break;
}

count++; //반복문을 마치기 전에 count를 증가
}
console.log('안녕히 가십시오');//반복문이 끝나면 메세지를 출력