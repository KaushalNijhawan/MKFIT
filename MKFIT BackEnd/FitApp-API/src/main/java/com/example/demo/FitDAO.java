package com.example.demo;


import java.util.List;

import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.mongodb.MongoClient;

public class FitDAO {

	private MongoTemplate getConnection() {

		MongoDbFactory df = new SimpleMongoDbFactory(new MongoClient("localhost"), "FitApi");
		MongoTemplate mt = new MongoTemplate(df);

		return mt;
	}

	public String addingUser(User user) {
	   MongoTemplate mt = getConnection();
	   Query query1 = new Query();
	   Query query2 = new Query();
	   query1.addCriteria(Criteria.where("userName").is(user.getUserName()));
	   query2.addCriteria(Criteria.where("userEmail").is(user.getUserEmail()));
	   boolean userExist1 = mt.exists(query1, User.class , "Users");
	   boolean userExist2 = mt.exists(query2 , User.class, "Users");
	   if(userExist1) {
		   return "Username already Taken!";
	   }else if(userExist2) {
		   return "Email already Taken!!";
	   }
	   else {
		   mt.insert(user , "Users");
			return "success";
	   }
	   
	}

	public String verfyingUser(String username, String password) {
		MongoTemplate mt = getConnection();
		Query query = new Query();
		query.addCriteria(Criteria.where("userName").is(username).and("password").is(password));

		boolean userExists = mt.exists(query, User.class, "Users");
		

		if (userExists) {
			return "Successful Login";
		} else {
			return "failed";
		}
	}

	public String storingBMI(BMI obj) {
		MongoTemplate mt = getConnection();
		double BMI = (Integer.parseInt(obj.getWeight())*10000)/(Integer.parseInt(obj.getHeight())*Integer.parseInt(obj.getHeight()));
		String bmi = Double.toString(BMI);
		obj.setBMI(bmi);
		mt.insert(obj,"BMI");
		return obj.getBMI();
	}

	public String calorieGetting(CalorieCount cobj) {
		MongoTemplate mt = getConnection();
		
	    int height = Integer.parseInt(cobj.getHeight());
		int weight = Integer.parseInt(cobj.getWeight());
		int age = Integer.parseInt(cobj.getAge());
		String gender = cobj.getGender();
		String activity = cobj.getActivity();
		double bmr=  0.0;
		double calorie=  0.0;
		if(gender.toLowerCase().equals("male")) {
			bmr = 10*weight + 6.25*height - 5*age + 5;
		}else if(gender.toLowerCase().equals("female")) {
			bmr = 10*weight + 6.25*height - 5*age - 161;
		}
		if(activity.equals("BMR")) {
			calorie = bmr;
		}else if(activity.equals("Sedentary")) {
			calorie = bmr*1.2;
		}else if(activity.equals("Light")) {
			calorie = bmr*1.375;
		}else if(activity.equals("Moderate")) {
			calorie = bmr*1.55;
		}else if(activity.equals("Active")) {
			calorie = bmr*1.725;
		}else if(activity.equals("ExtraActive")) {
			calorie = bmr*1.9;
		}
		cobj.setCalorie(Double.toString((int)Math.ceil(calorie)));
		mt.insert(cobj,"CalorieRecord");
		return cobj.getCalorie();
	}

	public List<Meal> getDietplan(String dietname) {
		MongoTemplate mt = getConnection();
		Query query = new Query();
		query.addCriteria(Criteria.where("type").is(dietname));
		List<Meal> meal = mt.find(query, Meal.class,"Diet");
		return meal;
	}

	public List<Train> getTrainingSchedule(String traintype) {
		MongoTemplate mt = getConnection();
		List<Train> training = mt.findAll(Train.class, traintype);
		return training;
	}
}
