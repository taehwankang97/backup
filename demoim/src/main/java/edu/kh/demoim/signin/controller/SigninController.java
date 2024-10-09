package edu.kh.demoim.signin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class SigninController {


	@GetMapping("/signin")
	public String signup() {
		return "signin/signin";
	}
	
}
