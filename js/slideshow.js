var current = 0; //이미지 위치를 나타내는 변수
showSlides(); //기본 첫 번째 이미지를 보여줌

function showSlides(){
    var slides = document.querySelectorAll("#slides > img");
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display="none";
    }
    current++;
    if(current > slides.length) //만약 마지막 순서면
        current = 1;  //1번째로 이동
    slides[current-1].style.display = "block"; //현재 위치 이미지 표시
    setTimeout(showSlides, 2000); 
    //특정 함수를 반복해서 실행시키는 함수

}   
function register(){
    window.open("register.html","reg","width=500px;","height=500px;");
}
function Regi(){
    alert("회원가입 완료!");
    
}
function Cancel(){
    alert("초기화 되었습니다.");
}
function log(){
    window.open("log.html","log","width:500px;","height:500px;")
}
function login(){
    alert("로그인 성공!");
}