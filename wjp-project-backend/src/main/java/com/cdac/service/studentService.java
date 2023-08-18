package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Student;
import com.cdac.repository.StudentRepository;

@Service
public class studentService {
	@Autowired
	private StudentRepository studentRepo;
	
	public void add(Student student) {
		studentRepo.save(student);
	}
	
	public boolean login(String email, String password) {
		Student student = studentRepo.findByEmailAndPassword(email, password);
		if(student == null)
			return false;
		else
			return true;
	}
	
//	public Student findByEmail(String email) {
//		return studentRepo.findByEmail(email);
//	}
}
