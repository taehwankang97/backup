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
<<<<<<< HEAD
}

// 이메일 유효성 검사
const memberEmail = document.querySelector("#memberEmail");
const emailKind = document.querySelector("#email-kind");
const emailMessage = document.querySelector("#emailMessage");

// 이메일 메시지를 미리 작성
const emailMessageObj = {
invalid: "알맞은 이메일 형식으로 작성해 주세요.",
normal: "메일을 받을 수 있는 이메일을 입력해주세요."
};

// 이메일이 입력될 때마다 유효성 검사 수행
memberEmail.addEventListener("input", validateEmail);
emailKind.addEventListener("input", validateEmail);

function validateEmail() {
// 입력된 값 얻어오기
const inputEmail = memberEmail.value.trim();
const inputDomain = emailKind.value.trim();

// 이메일이 없을 경우 메시지 초기화
if (inputEmail.length === 0 && inputDomain.length === 0) {
  emailMessage.innerText = emailMessageObj.normal;
  emailMessage.classList.remove("confirm", "error");
  memberEmail.value = "";
  checkObj.memberEmail = false;
  return;
}

// 이메일 형식 정규 표현식 객체
const emailRegEx = /^[a-zA-Z0-9._%+-]+$/;
const domainRegEx = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 이메일 아이디 형식이 맞는지 검사
if (!emailRegEx.test(inputEmail)) {
  emailMessage.innerText = emailMessageObj.invalid;
  emailMessage.classList.add("error");
  emailMessage.classList.remove("confirm");
  checkObj.memberEmail = false;
  return;
}

// 이메일 도메인 형식이 맞는지 검사
if (inputDomain.length > 0 && !domainRegEx.test(inputDomain)) {
  emailMessage.innerText = emailMessageObj.invalid;
  emailMessage.classList.add("error");
  emailMessage.classList.remove("confirm");
  checkObj.memberEmail = false;
  return;
}

// 모든 유효성 검사를 통과한 경우
emailMessage.innerText = "올바른 이메일 형식입니다.";
emailMessage.classList.remove("error");
emailMessage.classList.add("confirm");
checkObj.memberEmail = true;
}

// 주소 API
function findAddress() {
new daum.Postcode({
  oncomplete: function (data) {
    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
    var addr = ''; // 주소 변수
    
    // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
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
=======
// 이메일 유효성 검사 해야함

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

/* 비밀번호 유효성 검사 */

const memberPw = document.querySelector("#memberPw");
const memberPwConfirm = document.querySelector("#memberPwConfirm");
const pwMessage = document.querySelector("#pwMessage");
const pwMessageObj = {};
pwMessageObj.normal = "영어,숫자,특수문자 1글자 이상, 6~20자 사이.";
pwMessageObj.invaild = "유효하지 않은 비밀번호 형식입니다.";
pwMessageObj.vaild = "유효한 비밀번호 형식입니다.";
pwMessageObj.error = "비밀번호가 일치하지 않습니다.";
pwMessageObj.check = "비밀번호가 일치 합니다.";
memberPw.addEventListener("input", () => {
  const inputPw = memberPw.value.trim();
  if(inputPw.length === 0){ // 비밀번호 미입력
    pwMessage.innerText = pwMessageObj.normal;
    pwMessage.classList.remove("confirm", "error");
    checkObj.memberPw = false;
    memberPw.value = "";
    return;
  }
  // 비밀번호 정규표현식 검사
  const lengthCheck = inputPw.length >= 6 && inputPw.length <= 20;
  const letterCheck = /[a-zA-Z]/.test(inputPw); // 영어 알파벳 포함
  const numberCheck = /\d/.test(inputPw); // 숫자 포함
  const specialCharCheck = /[\!\@\#\_\-]/.test(inputPw); // 특수문자 포함
  // 조건이 하나라도 만족하지 못하면
  if ( !(lengthCheck && letterCheck && numberCheck && specialCharCheck) ) {
    pwMessage.innerText = pwMessageObj.invaild;
    pwMessage.classList.remove("confirm");
    pwMessage.classList.add("error");
    checkObj.memberPw = false;
    return;
  }
  pwMessage.innerText = pwMessageObj.vaild;
  pwMessage.classList.remove("error");
  pwMessage.classList.add("confirm");
  checkObj.memberPw = true;
  // 비밀번호 확인이 작성된 상태에서
  // 비밀번호가 입력된 경우
  if(memberPwConfirm.value.trim().length > 0){
    checkPw(); // 같은지 비교하는 함수 호출
  }
});
/* ----- 비밀번호, 비밀번호 확인 같은지 검사하는 함수 ----- */
function checkPw(){
  // 같은 경우
  if(memberPw.value === memberPwConfirm.value){
    pwMessage.innerText = pwMessageObj.check;
    pwMessage.classList.add("confirm");
    pwMessage.classList.remove("error");
    checkObj.memberPwConfirm = true;
    return;
  }
  // 다른 경우
  pwMessage.innerText = pwMessageObj.error;
  pwMessage.classList.add("error");
  pwMessage.classList.remove("confirm");
  checkObj.memberPwConfirm = false;
}
/* ----- 비밀번호 확인이 입력 되었을 때  ----- */
memberPwConfirm.addEventListener("input", () => {
  // 비밀번호 input에 작성된 값이 유효한 형식일때만 비교
  if(checkObj.memberPw === true){
    checkPw();
    return;
  }
  // 비밀번호 input에 작성된 값이 유효하지 않은 경우
  checkObj.memberPwConfirm = false;
});
>>>>>>> parent of ce55aac (프로젝트 정규 표현식 작성 및 css 수정)
