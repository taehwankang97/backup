package edu.kh.demoim;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication (exclude = {SecurityAutoConfiguration.class})
public class DemoimApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoimApplication.class, args);
	}

}
