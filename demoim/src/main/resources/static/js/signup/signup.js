function updateEmailInput() {
  const emailInput = document.getElementById('email-kind');
  const select = document.getElementById('email-type');
  const selectedValue = select.value;

  if (selectedValue === "custom") {
      // 직접 입력 선택 시 입력란 활성화
      emailInput.value = '';
      emailInput.removeAttribute('disabled');
      emailInput.classList.remove('disabled');
      emailInput.placeholder = "직접 입력하세요";
  } else if (selectedValue) {
      // 선택된 도메인을 이메일 입력란에 넣음
      emailInput.value = selectedValue;
      emailInput.setAttribute('disabled', 'disabled');
      emailInput.classList.add('disabled');
  } else {
      // 아무것도 선택되지 않았을 때
      emailInput.value = '';
      emailInput.setAttribute('disabled', 'disabled');
      emailInput.classList.add('disabled');
      emailInput.placeholder = "직접입력";
  }
}
