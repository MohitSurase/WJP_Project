package com.cdac.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Course;
import com.cdac.entity.Student;
import com.cdac.repository.CourseRepository;
import com.cdac.repository.StudentRepository;

@Service
public class courseService {
	@Autowired
	private CourseRepository courseRepo;
	
	public void add(Course course) {
		courseRepo.save(course);
	}
	
	public List<Course> find(){
		return courseRepo.findAll();
	}
	
	@Transactional
	public boolean delete(int courseId) {
	    int deletedCount = courseRepo.delete(courseId);
	    return deletedCount > 0;
	}
	
	@Transactional
	public boolean edit(int courseId, double fees) {
	    int editedCount = courseRepo.edit(courseId, fees);
	    return editedCount > 0;
	}

}
