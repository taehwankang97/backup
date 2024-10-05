package edu.kh.demoim.signup.service;

import org.springframework.stereotype.Service;

import edu.kh.demoim.signup.mapper.SignupMapper;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class SignupServiceImpl implements SignupService{

	private final SignupMapper mapper;
	
}
