package com.cdac.controller;

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
import com.cdac.entity.Student;

import com.cdac.service.studentService;
import com.cdac.service.courseService;


@RestController
@CrossOrigin
public class CourseController {
	
	@Autowired
	private courseService courseService;
	
	@PostMapping("/addCourse")
	public String add(@RequestBody Course course) {
		courseService.add(course);
	
		return "Course added successfully";
	}
	
	@GetMapping("/viewCourses")
	public List<Course> find() {
		return courseService.find();
	}


	@DeleteMapping("/deleteCourse")
	public ResponseEntity<String> delete(@RequestParam int courseId) {
		
	    boolean deleted = courseService.delete(courseId);
	    if (deleted) {
	        return new ResponseEntity<>("Course deleted successfully", HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
	    }
	}

	
	@PutMapping("/updateCourseFees")
	public ResponseEntity<String> edit(@RequestParam int courseId, @RequestParam double fees) {
		
	    boolean edited = courseService.edit(courseId, fees);
	    if (edited) {
	        return new ResponseEntity<>("Course edited successfully", HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
	    }
	}

}	
