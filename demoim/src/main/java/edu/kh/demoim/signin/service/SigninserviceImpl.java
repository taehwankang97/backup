package edu.kh.demoim.signin.service;

import org.springframework.stereotype.Service;

import edu.kh.demoim.signin.mapper.SigninMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SigninserviceImpl implements Signinservice{

	private final SigninMapper mapper;
	
	
	
}
