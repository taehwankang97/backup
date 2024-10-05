package edu.kh.demoim.tacou.service;

import org.springframework.stereotype.Service;

import edu.kh.demoim.tacou.mapper.TacouMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TacouServiceImpl implements TacouService{

	private final TacouMapper mapper;
	
}
