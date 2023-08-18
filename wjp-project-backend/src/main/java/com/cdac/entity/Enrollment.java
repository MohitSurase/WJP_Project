package com.cdac.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="enrollment")
public class Enrollment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="en_id")
	private int enId;
	
	private double acNo;
	private double fee;
	
	

	@Column(name="enrollment_date")
	private LocalDate date;
	
	@ManyToOne
	@JoinColumn(name ="student_id")
	private Student student;
	
	@ManyToOne
	@JoinColumn(name ="course_id")
	private Course course;

	public int getEnId() {
		return enId;
	}

	public void setEnId(int enId) {
		this.enId = enId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	public double getAcNo() {
		return acNo;
	}

	public void setAcNo(double acNo) {
		this.acNo = acNo;
	}

	public double getFee() {
		return fee;
	}

	public void setFee(double fee) {
		this.fee = fee;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}
		
}
