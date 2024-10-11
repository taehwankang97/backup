function changeEmail() {
    const emailKindInput = document.getElementById("email-kind");
    const emailTypeSelect = document.getElementById("email-type");
    
    // 선택된 옵션의 값 가져오기
    const selectedValue = emailTypeSelect.value;

    // "직접입력" 옵션이 선택된 경우
    if (selectedValue === "") {
      emailKindInput.value = ''; // 입력 필드 초기화
      emailKindInput.disabled = false; // 입력 필드 활성화
    } else {
      emailKindInput.value = selectedValue; // 선택된 값 입력 필드에 설정
      emailKindInput.disabled = true; // 입력 필드 비활성화
    }
  }
// 이메일 유효성 검사 해야함
const memberEmail = document.querySelector("#memberEmail");
const memberKind = document.querySelector("#memberKind");
const emailMessage = document.querySelector("#emailMessage");

// 2 이메일 메시지를 미리 작성
const emailMessageObj = {}; // 빈 객체
emailMessageObj.invaild = "알맞은 이메일 형식으로 작성해 주세요.";

// 3) 이메일이 입력될 때 마다 유효성 검사를 수행
memberEmail.addEventListener("input", e => {

  // 입력된 값 얻어오기
  const inputEmail = memberEmail.value.trim();

  // 4) 입력된 이메일이 없을 경우
  if(inputEmail.length === 0){
    
    // 이메일 메시지를 normal 상태 메시지로 변경
    emailMessage.innerText = emailMessageObj.normal;

    // #emailMessage에 색상 관련 클래스를 모두 제거
    emailMessage.classList.remove("confirm", "error");

    // checkObj에서 memberEmail을 false로 변경
    checkObj.memberEmail = false;

    memberEmail.value = ""; // 잘못 입력된 값(띄어쓰기) 제거
    
    return;
  }


  // 5) 이메일 형식이 맞는지 검사(정규 표현식을 이용한 검사)

  // 이메일 형식 정규 표현식 객체
  const regEx1 = /^[a-zA-Z0-9._%+-]+$/;
  
  const regEx2 = /^[a-zA-Z0-9.-]+$/;

  const regEx3 = /^\.[a-zA-Z]{2,}$/;

  // 입력 값이 이메일 형식이 아닌 경우
  if( regEx1.test(inputEmail) === false ){ 
    emailMessage.innerText = emailMessageObj.invaild; // 유효 X 메시지
    emailMessage.classList.add("error"); // 빨간 글씨 추가
    emailMessage.classList.remove("confirm"); // 초록 글씨 제거
    checkObj.memberEmail = false; // 유효하지 않다고 체크
    return;
  }
   // 입력 값이 이메일 형식이 아닌 경우
   if( regEx2.test(inputEmail) === false ){ 
    emailMessage.innerText = emailMessageObj.invaild; // 유효 X 메시지
    emailMessage.classList.add("error"); // 빨간 글씨 추가
    emailMessage.classList.remove("confirm"); // 초록 글씨 제거
    checkObj.memberEmail = false; // 유효하지 않다고 체크
    return;
  }
});

//주소 api
  function findAddress() {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
  
        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var addr = ''; // 주소 변수
        
        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }
  
        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById('postcode').value = data.zonecode;
        document.getElementById("address").value = addr;
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById("detailAddress").focus();
      }
    }).open();
  }
  // 주소 검색 버튼 클릭 시
const searchAddress = document.querySelector("#searchAddress");
searchAddress.addEventListener("click", findAddress);

