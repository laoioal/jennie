package com.githrd.jennie.controller.guestBoard;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.jennie.controller.BlpInter;
import com.githrd.jennie.dao.GBoardDao;

public class GBoardWriteProc implements BlpInter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setAttribute("isRedirect", true);
		String view = "/whistle/guestBoard/gBoardList.blp";
		
		// 할일
		// 세션검사
		String sid = (String) req.getSession().getAttribute("SID");
		if(sid == null) {
			return "/whistle/member/login.blp";
		}
		
		// 파라미터 꺼내고
		String spage = req.getParameter("nowPage");
		String body = req.getParameter("body");
		String sno = req.getParameter("mno");
		int mno = Integer.parseInt(sno);
		
		// 글등록여부 검사
		GBoardDao gDao = new GBoardDao();
		int cnt = gDao.getWriteCount(sid);
		// 현재 보는 페이지 요청객체에 등록
		req.setAttribute("NOWPAGE", spage);
		if(cnt == 1) {
			/*
			Get 방식
			return "/whistle/guestBoard/gBoardList.blp?nowPage=" + spage;
			
			*/
			
			// POST 방식 - redirect용 jsp 파일을 이용하는 경우
			req.setAttribute("isRedirect", false);
			req.setAttribute("VIEW", "/whistle/guestBoard/gBoardList.blp");
			return "/guestBoard/redirect";
		}
		
		// 데이터베이스 작업하고 결과받고
		int result = gDao.addGBoard(sid, body);
		// 결과에 따라서 뷰 작성하고
		if(result == 0) {
			/*
			// 글 등록에 실패한 경우
			return "/whistle/guestBoard/gBoardWrite.blp?nowPage=" + spage;
			*/
			// POST 방식 -redirect용 jsp 파일을 이용하는 경우
			req.setAttribute("isRedirect", false);
			req.setAttribute("VIEW", "/whistle/guestBoard/gBoardList.blp");
			return "/guestBoard/redirect";
			
		}
		
		
		// 뷰 내보내고
		return view;

		
		
	}

}
