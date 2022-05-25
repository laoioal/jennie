package com.githrd.jennie.controller.reboard;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.jennie.controller.BlpInter;
import com.githrd.jennie.dao.ReboardDao;

public class ReboardEditProc implements BlpInter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String view = "/reboard/redirect";
		String id = (String) req.getSession().getAttribute("SID");
		
		// 로그인 확인
		if(id == null) {
			req.setAttribute("isRedirect", true);
			return "/whistle/member/login.blp";
		}
		
		// 파라미터
		String sno = req.getParameter("bno");
		int bno = Integer.parseInt(sno);
		String body = req.getParameter("body");
		String spage = req.getParameter("nowPage");
		

		
		ReboardDao rDao = new ReboardDao();
		int cnt = rDao.getEditComment(body, bno);
		//System.out.println(spage);
		// 결과값에 따른 처리
		req.setAttribute("NOWPAGE", spage);
		if(cnt == 1) {
			// 성공
			req.setAttribute("VIEW", "/whistle/reboard/reboardList.blp");
		} else if(cnt != 1) {
			// 실패
			req.setAttribute("VIEW", "/whistle/reboard/reboardEdit.blp");
		
		}
		
		return view;
	}

}
