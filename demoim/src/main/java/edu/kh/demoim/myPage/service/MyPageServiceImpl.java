package edu.kh.demoim.myPage.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import edu.kh.demoim.myPage.mapper.MyPageMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MyPageServiceImpl implements MyPageService{
	
	private final MyPageMapper mapper;
	
	/*
	 * @Value("${my.profile.web-path}") private String profileWebPath; // 웹 접근 경로
	 */	
	
	

}
