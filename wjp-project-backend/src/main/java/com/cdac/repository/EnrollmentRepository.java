package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.entity.Enrollment;
import com.cdac.entity.Student;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, Integer> {
	

}
