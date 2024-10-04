package edu.kh.demoim.main.controller;

import org.springframework.stereotype.Controller;
import edu.kh.demoim.main.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class MainController {

   private final MainService service;
   
   // 메인 페이지 요청
   @RequestMapping("/")
   public String mainPage() {
      return "common/main";
   }
   
   // 회원가입 약관 페이지 요청
   @GetMapping("signup")
   public String tacou() {
      return "signup/tacou";
   }
   
   // 약관 1 페이지 요청
   @GetMapping("signup/tacou1")
   public String tacou1() {
      return "signup/tacou1";
   }

   // 약관 2 페이지 요청
   @GetMapping("signup/tacou2")
   public String tacou2() {
      return "signup/tacou2";
   }

   // 약관 3 페이지 요청
   @GetMapping("signup/tacou3")
   public String tacou3() {
      return "signup/tacou3";
   }
}
