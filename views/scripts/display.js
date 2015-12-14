var React = require('react');
var ReactDOM = require('react-dom');
var bootstrap = require('react-bootstrap');

var phoneStyle = {
	width: "375",
	height: "600",
	margin: "0 auto",
	paddingTop: "88px",
	backgroundImage: "url(../../assets/image/phone.jpg)"
};

var screenStyle = {
	width: "240",
	height: "426",
	margin: "0 auto",
	border: "solid 2px #000"
};

var PageBox = React.createClass({
	render: function() {
		return (
			<div>
				<PhoneBox></PhoneBox>
				<hr/>
				<h1><center>A homework and ReactJS demo for Network programming</center></h1>
				<h3><center>Powered by GZW</center></h3>
			</div>
		);
	}
});

var PhoneBox = React.createClass({
	render: function() {
		return (
			<div style={phoneStyle}>
				<ScreenBox></ScreenBox>
			</div>
		);
	}
});

var ScreenBox = React.createClass({
	render: function(){
		return (
			<div style={screenStyle}>
				<iframe width="242px" height="428px" src="/contacts" scrolling="auto">
				</iframe>
			</div>
		);
	}
});

ReactDOM.render(<PageBox />, document.getElementById('content'));