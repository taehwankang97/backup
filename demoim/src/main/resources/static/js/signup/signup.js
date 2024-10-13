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