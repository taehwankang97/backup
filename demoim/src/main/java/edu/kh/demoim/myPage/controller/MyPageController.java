package edu.kh.demoim.myPage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import edu.kh.demoim.myPage.service.MyPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequiredArgsConstructor
@RequestMapping("myPage")
public class MyPageController {

	private final MyPageService service;
	
	@GetMapping("myPage")
	public String info() {
		return "myPage/myPage-info";
	}
	
	@GetMapping("changPw")
	public String changePw() {
		return "myPage/myPage-changPw";
	}
	
	@GetMapping("withdrawal")
	public String withdrawal() {
		return "myPage/myPage-withdrawal";
	}

	
}
