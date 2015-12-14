webpackHotUpdate(1,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var bootstrap = __webpack_require__(159);

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

	var PageBox = React.createClass({displayName: "PageBox",
		render: function() {
			return (
				React.createElement("div", null, 
					React.createElement(PhoneBox, null), 
					React.createElement("hr", null), 
					React.createElement("h1", null, React.createElement("center", null, "A homework && React.js practice for Network programming")), 
					React.createElement("h3", null, React.createElement("center", null, "Powered by GZW"))
				)
			);
		}
	});

	var PhoneBox = React.createClass({displayName: "PhoneBox",
		render: function() {
			return (
				React.createElement("div", {style: phoneStyle}, 
					React.createElement(ScreenBox, null)
				)
			);
		}
	});

	var ScreenBox = React.createClass({displayName: "ScreenBox",
		render: function(){
			return (
				React.createElement("div", {style: screenStyle}, 
					React.createElement("iframe", {width: "242px", height: "428px", src: "/contacts", scrolling: "auto"}
					)
				)
			);
		}
	});

	ReactDOM.render(React.createElement(PageBox, null), document.getElementById('content'));

/***/ }
])