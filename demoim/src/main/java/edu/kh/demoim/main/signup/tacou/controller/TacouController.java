package edu.kh.demoim.main.signup.tacou.controller;

import org.springframework.stereotype.Controller;

import edu.kh.demoim.main.signup.tacou.service.TacouService;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class TacouController {

	private final TacouService service;
	
}
