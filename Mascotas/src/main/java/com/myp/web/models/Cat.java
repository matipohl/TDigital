package com.myp.web.models;

public class Cat extends Animal implements PetInterface{
	

	public Cat(String name, String breed, int weight) {
		super(name, breed, weight);
		// TODO Auto-generated constructor stub
	}

	public String showAffection() {
		return "Este es un gato normal lalala";
	}
}
