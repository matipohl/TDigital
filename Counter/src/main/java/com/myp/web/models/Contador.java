package com.myp.web.models;

public class Contador {
	private int n = 0;

	
	public Contador() {
		
	}
	public int getN() {
		return n;
	}

	public void setN(int n) {
		this.n = n;
	}
	
	public int sumador() {
		n+=1;
		return n;
	}
}
