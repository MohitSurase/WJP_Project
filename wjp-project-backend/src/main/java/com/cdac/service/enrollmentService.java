package com.cdac.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Course;
import com.cdac.entity.Enrollment;
import com.cdac.entity.Student;
import com.cdac.repository.CourseRepository;
import com.cdac.repository.EnrollmentRepository;
import com.cdac.repository.StudentRepository;

@Service
public class enrollmentService {
	@Autowired
	private EnrollmentRepository enrollmentRepo;
	
	
	public void add(Enrollment enroll) {
		enrollmentRepo.save(enroll);
	}
	
	public List<Enrollment> find(){
		return enrollmentRepo.findAll();
	}
	
	
}
