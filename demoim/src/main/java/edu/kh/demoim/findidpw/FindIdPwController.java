package edu.kh.demoim.findidpw;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class FindIdPwController {
	
	@GetMapping("/findIdPw")
	public String findIdPw() {
		
		return "findIdPw/findIdPw";
	}
	

	
}
