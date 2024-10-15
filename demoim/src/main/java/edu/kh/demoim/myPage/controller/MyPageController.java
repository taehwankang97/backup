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
	
	@GetMapping("info")
	public String info() {
		return "myPage/myPage-info";
	}
	
	@GetMapping("changePw")
	public String changePw() {
		return "myPage/myPage-changePw";
	}
	
	@GetMapping("withdrawal")
	public String withdrawal() {
		return "myPage/myPage-withdrawal";
	}

	@GetMapping("withdrawalPage")
	public String withdrawalPage() {
		return "myPage/withdrawalPage";
	}

}
