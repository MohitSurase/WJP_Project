package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Admin;
import com.cdac.entity.Course;
import com.cdac.entity.Student;
import com.cdac.repository.AdminRepository;
import com.cdac.repository.StudentRepository;

@Service
public class adminService {
	@Autowired
	private AdminRepository adminRepo;
	
	public void add(Admin admin) {
		adminRepo.save(admin);
	}
	public boolean login(String email, String password) {
		Admin admin = adminRepo.findByEmailAndPassword(email, password);
		if(admin == null)
			return false;
		else
			return true;
	}
	
}
