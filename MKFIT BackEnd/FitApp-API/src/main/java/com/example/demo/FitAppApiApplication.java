package com.example.demo;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="*")
@SpringBootApplication
@RestController
public class FitAppApiApplication {
    
    private FitDAO fdao = new FitDAO();
	public static void main(String[] args) {
		SpringApplication.run(FitAppApiApplication.class, args);
	}
    
	@PostMapping("/register")
	public String addUser(@RequestBody User user) {
		return fdao.addingUser(user);
	}
	@PostMapping("/login")
	public String verifyUser(@RequestBody Login obj) {
		return fdao.verfyingUser(obj.getUsername() , obj.getPassword());
	}
	@PostMapping("/bmiStore")
	public String storeBMI(@RequestBody BMI obj) {
		return fdao.storingBMI(obj);
		
	}
	@PostMapping("/calorieCount")
	public String calorieGet(@RequestBody CalorieCount cobj) {
		return fdao.calorieGetting(cobj);
	}
	@RequestMapping("/diet/{dietname}")
	public List<Meal> getDiet(@PathVariable("dietname") String dietname){
		return fdao.getDietplan(dietname);
	}
	@RequestMapping("/train/{traintype}")
    public List<Train> getTraining(@PathVariable("traintype") String traintype){
		return fdao.getTrainingSchedule(traintype);
	}
	@RequestMapping("/")
	public String home() {
		return "hello this is home page!!";
	}
	
}
