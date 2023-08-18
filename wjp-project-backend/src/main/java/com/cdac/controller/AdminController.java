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

import com.cdac.service.adminService;
@RestController
@CrossOrigin
public class AdminController {
	
	@Autowired
	private adminService adminService;
	

	@GetMapping("/loginAdmin")
	public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
		boolean value = adminService.login(email, password);
		if(value)
			return ResponseEntity.status(HttpStatus.OK).body("Admin Login Successful");
		else
			return ResponseEntity.status(HttpStatus.OK).body("Invalid Creds");
	}
}	
