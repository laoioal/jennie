// join.html에서 전송한 데이터를
// 페이지에 h1태그로 추가해서 보여주세요

// 유효성검사

	document.getElementById('pwck').onkeyup = function() {
		var ckpw = this.value
		for(var i = 0; i < ckpw.length; i++) {
			if((document.getElementById('pw').value).charAt(i) != ckpw.charAt(i)){
				alert('비밀번호가 다릅니다.')
				document.getElementById('pwck').value = '';
			}
		}
	}
	
	
	
	
	
	

document.getElementById('jbtn').onclick = function() {
	var sname = document.getElementById('name').value;
	var sid = document.getElementById('id').value;
	var spw = document.getElementById('pw').value;
	var spwck = document.getElementById('pwck').value;
	var smail = document.getElementById('mail').value;
	var stel = document.getElementById('tel').value;
	var sgen = document.getElementsByName('gen');
	var genvalue = '';
	var savt = document.getElementsByName('avt');
	var avtvalue = '';
	
	for(var i = 0; i < sgen.length; i++) {
		if(sgen[i].checked) {
			genvalue = sgen[i].value;
		}
	}
	
	for(var i = 0; i < savt.length; i++){
		if(savt[i].checked){
			avtvalue = savt[i].value;
		}
	}

	// 편하게 하는방법 ==> 체크가 필요한 곳에 클래스 이름 부여(ck 부여 가정)
	// document.getElementsByClassName('ck');
	// for(var i = 0; i < el.length; i++) {
	//	var tmp = el[i].value;
	// if(!tmp) {
	//	el[i].focus();
	//	retrun
	//	}
	// }
/*	if(!sname) {
		alert('이름을 입력해주세요.');
		document.getElementById('name').focus();
	} else if(!sid) {
		document.getElementById('id').focus();
	} else if(!spw) {
		document.getElementById('pw').focus();
	} else if(!spwck) {
		document.getElementById('pwck').focus();
	} else if(!smail) {
		document.getElementById('mail').focus();
	} else if(!stel) {
		document.getElementById('tel').focus();
	} else if(spw !== spwck){
		alert('비밀번호가 다릅니다.');
	}*/
	
// 정규식 검사
	// 1. 이름 -> 영문 한글 2글자 이상 10글자이하
		var namePat =/^[a-zA-Z가-힇]{2,10}$/
		var nameResult = namePat.test(sname);

	// 2. 아이디 -> 영문 5글자이상 10글자 이하 특수문자 1자이상
		var idPat=/^[a-zA-Z0-9]{5,10}$/
		var idResult = idPat.test(sid);

	// 3. 비밀번호 ->  특수문자 1개이상 
		var pwPat1 = /^([a-zA-Z0-9])*([^a-zA-Z0-9])+([a-zA-Z0-9]{1,14})+([^a-zA-Z0-9])*$/
		var pwPat2 = /^([a-zA-Z0-9])*([^a-zA-Z0-9])*([a-zA-Z0-9]{1,14})([^a-zA-Z0-9])+$/
		var pwResult1 = pwPat1.test(spw);
		var pwResult2 = pwPat2.test(spw);

	// 4. 메일	-> @ . 
		var mailPat = /^\w{2,15}@[a-zA-Z]{2,10}[\.][a-zA-Z]{2,3}[\.]?[a-zA-Z]{0,2}$/
		var mailResult = mailPat.test(smail);

	// 5. 전화번호 - 010-0000-0000
		var telPat = /^0[0-9]{2}-[0-9]{4}-[0-9]{4}/
		var telResult = telPat.test(stel);
		
		
		if(!sname){
			alert('이름을 입력해주세요.');
			document.getElementById('name').focus();
		} else if(!nameResult) {
			alert('잘못된 이름입니다.');
			document.getElementById('name').value = '';
			document.getElementById('name').focus();
		} else if(!sid) {
			alert('아이디를 입력해주세요.');
			document.getElementById('id').focus();
		} else	if(!idResult) {
			alert('잘못된 아이디입니다. 아이디는 영문과 숫자 5 ~ 10자로 구성되어야합니다.');
			document.getElementById('id').value = '';
			document.getElementById('id').focus();
		} else if(!spw) {
			alert('비밀번호를 입력해주세요.');
			document.getElementById('pw').focus();
		} else if(!pwResult1 && !pwResult2) {
			alert('잘못된 비밀번호입니다. 비밀번호는 특수문자를 포함해야합니다.');
			document.getElementById('pw').value = '';
			document.getElementById('pw').focus();
		} else if(!spwck){
			alert('비밀번호 체크를 입력해주세요.');
			document.getElementById('pwck').focus();
		} else if(!smail) {
			document.getElementById('mail').focus();
		} else 	if(!mailResult) {
			alert('잘못된 메일주소입니다. ');
			document.getElementById('mail').value = '';
			document.getElementById('mail').focus();
		}else if(!stel) {
			document.getElementById('tel').focus();
		} else 	if(!telResult) {
			alert('잘못된 연락처입니다. ');
			document.getElementById('tel').value = '';
			document.getElementById('tel').focus();
		} else if(!genvalue) {
			alert('성별을 선택해주세요. ');
		} else if(!avtvalue) {
			alert('아바타를 선택해주세요. ');
		} else {
			document.getElementById("frm").submit();
		}




}