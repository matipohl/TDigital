package com.myp.web.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.myp.web.models.Generator;

/**
 * Servlet implementation class ShowWords
 */
@WebServlet("/ShowWords")
public class ShowWords extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		String word = (String) session.getAttribute("word");
		String time = (String) session.getAttribute("time");
		Integer count = (Integer) session.getAttribute("count");
		
		if(word == null || time == null || count == null) {
			session.setAttribute("word", "");
			session.setAttribute("time", "");
			session.setAttribute("count", 0);
		} else {
			session.setAttribute("word", Generator.randomizer());
			session.setAttribute("time", Generator.timeCreator());
			session.setAttribute("count", Generator.counter());
		}
		
		RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/random.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
