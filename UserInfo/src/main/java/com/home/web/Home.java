package com.home.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Home
 */
@WebServlet("/Home")
public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Home() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String firstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		String favLang = request.getParameter("favoriteLanguage");
		String homeTown = request.getParameter("homeTown");
		
		response.setContentType("text/html");
        // writes the response
        PrintWriter out = response.getWriter();
        if(firstName == null)
        	firstName = "Unknown";
        if(lastName == null)
        	lastName = "Unknown";
        if(favLang == null)
        	favLang = "Unknown";
        if(homeTown == null)
        	homeTown = "Unknown";
        
        out.write("<h1>Welcome " + firstName + " " + lastName + "</h1>"
        		+ "<h2>Your favorite language is: " + favLang + "</h2>" +
        		"<h2>Your hometown is : " + homeTown);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
