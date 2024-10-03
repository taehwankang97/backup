package edu.kh.demoim.main.controller;

import org.springframework.stereotype.Controller;

import edu.kh.demoim.main.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
@RequiredArgsConstructor
public class MainController {
	
	private final MainService service;
	
	@RequestMapping("/")
	public String mainPage() {
		
		return "common/main";
	}
	
	@GetMapping("TermsAndConditionsOfUse")
	public String TACOU(@RequestParam String param) {
		
		return "signup/TACOU";
	}
	
	

}
