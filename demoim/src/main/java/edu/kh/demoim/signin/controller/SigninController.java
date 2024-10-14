package edu.kh.demoim.signin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import edu.kh.demoim.signin.service.Signinservice;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class SigninController {

	private final Signinservice service;

	
	@GetMapping("/signin")
	public String signup() {
		return "signin/signin";
	}
	
}
