package com.myp.web.models;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;  

public class Generator {
	
	private static int n = 0;
	
	public static String randomizer() {
		String word = "";
		
        for (int i = 0; i < 10; i++) {
            int v = 1 + (int) (Math.random() * 26);
            char c = (char) (v + (i == 0 ? 'A' : 'a') - 1);
            word += c;
        }
        return word;
	}
	
	public static String timeCreator() {
		LocalDateTime now = LocalDateTime.now();  
		DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"); 
		
		String dateTime = now.format(format);  
		
		return dateTime;
	}
	
	public static int counter() {
		n++;
		return n;
	}
	
	

}
