package com.cdac.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Course;
import com.cdac.entity.Enrollment;
import com.cdac.entity.Student;
import com.cdac.repository.CourseRepository;
import com.cdac.repository.StudentRepository;
import com.cdac.service.studentService;
import com.cdac.service.courseService;
import com.cdac.service.enrollmentService;

@RestController
@CrossOrigin
public class EnrollmentController {

	@Autowired
	private enrollmentService enrollService;

	@Autowired
	private CourseRepository courseRepo;
	
	@Autowired
	private StudentRepository studentRepo;

	@GetMapping("/addEnrollment")
	public String add(@RequestParam String courseName, @RequestParam double fee, @RequestParam double acNo, @RequestParam String email) {
		System.out.println(courseName+" -------------"+fee+" "+acNo+" "+email);
		Student student = studentRepo.findByEmail(email);
		Course course = courseRepo.findByName(courseName);
		Enrollment enroll = new Enrollment();
		enroll.setCourse(course);
		enroll.setStudent(student);
		enroll.setAcNo(acNo);
		enroll.setFee(fee);
		enroll.setDate(LocalDate.now());
		enrollService.add(enroll);

		return "Enrollment successfull";
	}


}
