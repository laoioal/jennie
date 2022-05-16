// join.html에서 전송한 데이터를
// 페이지에 h1태그로 추가해서 보여주세요



/*
	param : 'id=jennie&pw=j12345&name=제니'
	
==> 문자열 배열로 변환
arr : ['id=jennie', 'pw=j12345', 'name=제니']

==>
	for(var i = 0; i <arr.length; i++) {
		var tmp = arr[i].split('=');
		
	}
tmp : ['id', 'jennie'] ['pw' 'j12345'] ['name', '제니']
*/

var param = location.search;
param = param.substring(1);
param = decodeURIComponent(param);

var data = {};
var key = [];
var arr = param.split('&');

for(var i = 0 ; i < arr.length; i++){
	var tmp = arr[i].split('=');
	key[i] = tmp[0];
	data[tmp[0]] = tmp[1];
}
for(var i = 0; i < arr.length; i++){
	document.write('<h1>' + key[i] + ' : ' + data[key[i]] + '</h1>');
}