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
