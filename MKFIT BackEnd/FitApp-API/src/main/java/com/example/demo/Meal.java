package com.example.demo;

public class Meal {
	private String breakfast;
	private String lunch;
	private String dinner;
	private String morningSnack;
	private String eveningSnack;
	private String bedtimeMeal;

	public Meal(String breakfast, String lunch, String dinner, String morningSnack, String eveningSnack,
			String bedtimeMeal) {
		super();
		this.breakfast = breakfast;
		this.lunch = lunch;
		this.dinner = dinner;
		this.morningSnack = morningSnack;
		this.eveningSnack = eveningSnack;
		this.bedtimeMeal = bedtimeMeal;
	}

	public Meal() {
		super();
	}

	public String getBreakfast() {
		return breakfast;
	}

	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}

	public String getLunch() {
		return lunch;
	}

	public void setLunch(String lunch) {
		this.lunch = lunch;
	}

	public String getDinner() {
		return dinner;
	}

	public void setDinner(String dinner) {
		this.dinner = dinner;
	}

	public String getMorningSnack() {
		return morningSnack;
	}

	public void setMorningSnack(String morningSnack) {
		this.morningSnack = morningSnack;
	}

	public String getEveningSnack() {
		return eveningSnack;
	}

	public void setEveningSnack(String eveningSnack) {
		this.eveningSnack = eveningSnack;
	}

	public String getBedtimeMeal() {
		return bedtimeMeal;
	}

	public void setBedtimeMeal(String bedtimeMeal) {
		this.bedtimeMeal = bedtimeMeal;
	}

}
