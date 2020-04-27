package com.example.demo;

public class User {
	private String userName;
	private String userEmail;
	private String userContact;
	private String password;
	

	public User() {
		super();
	}

	public User(String userName, String userEmail, String userContact, String password) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.userContact = userContact;
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserContact() {
		return userContact;
	}

	public void setUserContact(String userContact) {
		this.userContact = userContact;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [password=" + password + ", userContact=" + userContact + ", userEmail=" + userEmail
				+ ", userName=" + userName + "]";
	}

}
