package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Student;

import com.cdac.service.studentService;

@RestController
@CrossOrigin
public class StudentController {
	
	@Autowired
	private studentService studService;
	
	@PostMapping("/addStudent")
	public String add(@RequestBody Student student) {
		studService.add(student);
	
		return "Student added successfully";
	}
	
//@PostMapping("/add")
//	
//	public ResponseEntity<String> add(@RequestBody User usr,HttpServletRequest request) {
//		user.addUser(usr);
//		
//		return ResponseEntity.status(HttpStatus.OK).body("User Added Successfully");
//	}
	
	@GetMapping("/loginStudent")
	public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
		boolean value = studService.login(email, password);
		if(value)
			return ResponseEntity.status(HttpStatus.OK).body("User Login Successful");
		else
			return ResponseEntity.status(HttpStatus.OK).body("Invalid Creds");
	}
}	
