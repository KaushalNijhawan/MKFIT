package com.example.demo;

public class BMI {
	private String height;
	private String weight;
	private String name;
	private String age;
	private String BMI;
	

	public BMI(String height, String weight, String name, String age, String bMI) {
		super();
		this.height = height;
		this.weight = weight;
		this.name = name;
		this.age = age;
		BMI = bMI;
	}

	public String getBMI() {
		return BMI;
	}

	public void setBMI(String bMI) {
		BMI = bMI;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public BMI() {
		super();
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
