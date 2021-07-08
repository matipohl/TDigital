package com.myp.web.models;

public class Dog extends Animal implements PetInterface{

	public Dog(String name, String breed, int weight) {
		super(name, breed, weight);
		// TODO Auto-generated constructor stub
	}
	
	public String showAffection() {
		if(getWeight() >= 30) {
			return "El perro esta muy gordo jijijjuju";
		}
		else {
			return "Le falta purina dog chow";
		}
	}
}
