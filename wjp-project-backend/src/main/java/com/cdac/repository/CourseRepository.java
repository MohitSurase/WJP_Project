package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Integer>{
	
	@Modifying
	@Query("delete from Course c where c.courseId = ?1")
	public int delete(int courseId);
	
	@Modifying
	@Query("update Course c set c.fees = ?2 where c.courseId = ?1")
	public int edit(int courseId, double fees);
	
	@Query("select c from Course c where c.courseName = ?1")
	public Course findByName(String courseName);
	
}
