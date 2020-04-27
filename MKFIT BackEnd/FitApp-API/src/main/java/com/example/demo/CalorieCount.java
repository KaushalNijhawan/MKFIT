package com.example.demo;

public class CalorieCount {

	private String name;
	private String age;
	private String weight;
	private String height;
	private String activity;
	private String gender;
	private String calorie;

	public CalorieCount() {
		super();
	}

	public CalorieCount(String name, String age, String weight, String height, String activity, String gender,
			String calorie) {
		super();
		this.name = name;
		this.age = age;
		this.weight = weight;
		this.height = height;
		this.activity = activity;
		this.gender = gender;
		this.calorie = calorie;
	}

	public String getCalorie() {
		return calorie;
	}

	public void setCalorie(String calorie) {
		this.calorie = calorie;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

}
