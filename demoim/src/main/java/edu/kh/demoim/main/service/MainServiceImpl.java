package edu.kh.demoim.main.service;

import org.springframework.stereotype.Service;

import edu.kh.demoim.main.mapper.MainMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainServiceImpl implements MainService{

	private final MainMapper mapper;
	
}
