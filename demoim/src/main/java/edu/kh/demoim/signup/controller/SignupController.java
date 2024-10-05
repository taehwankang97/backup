package edu.kh.demoim.signup.controller;

import org.springframework.stereotype.Controller;

import edu.kh.demoim.signup.service.SignupService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequiredArgsConstructor
public class SignupController {

	private final SignupService service;
	
	@GetMapping("/signup")
	public String signup() {
		return "signup/signup";
	}
	
	
	
}
