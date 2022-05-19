package com.githrd.jennie.controller.guestBoard;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.jennie.controller.BlpInter;
import com.githrd.jennie.dao.GBoardDao;

public class GBoardWriteJsonProc implements BlpInter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = (String) req.getSession().getAttribute("SID");
		req.setAttribute("isRedirect", null);
		if(id == null) {
			req.setAttribute("isRedirect", true);
			return "/whistle/member/login.blp";			
		}
		GBoardDao gDao = new GBoardDao();
		int cnt = gDao.getWriteCount(id);
		
		if(cnt == 1) {
			
		}
		
		
		String body = req.getParameter("body");
		
		

		return null;
	}

}
