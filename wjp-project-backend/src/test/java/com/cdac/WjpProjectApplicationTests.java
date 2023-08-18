package com.cdac;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cdac.entity.Admin;
import com.cdac.entity.Course;
import com.cdac.entity.Student;
import com.cdac.repository.AdminRepository;
import com.cdac.repository.CourseRepository;
import com.cdac.repository.StudentRepository;

@SpringBootTest
class WjpProjectApplicationTests {

	@Autowired
	private StudentRepository studentRepo;

	@Autowired
	private CourseRepository courseRepo;
	@Autowired
	private AdminRepository adminRepo;
	
	@Test
	void addStudent() {
		Student student = new Student();
		student.setStudentName("ABC");
		student.setEmail("abc@gmail.com");
		student.setUsername("abc");
		student.setPassword("qwertyy");
		student.setMobileNumber(9876543210L);
		studentRepo.save(student);
	}
	
	@Test
	void addCourse() {
		Course course = new Course();
		course.setCourseId(1000);
		course.setCourseName("DAC");
		course.setDuration(6);
		course.setFees(90000);
		courseRepo.save(course);
	}
	
	
	@Test
	void addAdmin() {
		Admin admin = new Admin();
		admin.setEmail("anwar@gmail.com");
		admin.setPassword("anwar");
		adminRepo.save(admin);
	}
}
