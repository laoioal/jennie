package com.githrd.jennie.controller.reboard;

import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;

import com.githrd.jennie.controller.*;
import com.githrd.jennie.dao.*;
import com.githrd.jennie.vo.BoardVO;

public class ReboardComment implements BlpInter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String view = "/reboard/reboardComment";
		// 할일
		// 로그인 체크
		String sid = (String) req.getSession().getAttribute("SID");
		if(sid == null) {
			req.setAttribute("isRedirect", true);
			return "/whistle/member/login.blp";
		}
		// 파라미터 받고
		String sno = req.getParameter("bno");
		int bno = Integer.parseInt(sno);
		String spage = req.getParameter("nowPage");

		// 데이터베이스 조회
		ReboardDao rDao = new ReboardDao();
		BoardVO bVO = rDao.getReboardInfo(bno, sid);
		// VO 만들어서 데이터 채우고
		req.setAttribute("DATA", bVO);
		// 데이터 심고
		
		// 뷰 부르고
		return view;
	}

}
