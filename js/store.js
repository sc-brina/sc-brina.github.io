if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.555665, 126.9259767), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);

var markerPosition  = new kakao.maps.LatLng(37.555665, 126.9259767); 

var marker = new kakao.maps.Marker({
  position: markerPosition
});

marker.setMap(map);


// map