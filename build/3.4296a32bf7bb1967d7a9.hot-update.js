webpackHotUpdate(3,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var bootstrap = __webpack_require__(159);

	var centerDiv = {
		textAlign: "center",
		margin: "0 auto"
	};

	var buttonStyle = {
		width: '100%'
	};

	var PeopleBox = React.createClass({displayName: "PeopleBox",
		render: function(){
			return (
				React.createElement("div", null, 
					React.createElement(PeopleHeader, null), 
					React.createElement(PeopleForm, null)
				)
			);
		}
	});

	var PeopleHeader = React.createClass({displayName: "PeopleHeader",
		render: function(){
			return (
				React.createElement(bootstrap.Navbar, null, 
						React.createElement(bootstrap.Nav, {navbar: true, left: true}, 
							React.createElement(bootstrap.NavItem, {href: "/contacts"}, "取消")
						), 
						React.createElement(bootstrap.NavBrand, null, "G-adress"), 
						React.createElement(bootstrap.Nav, {navbar: true, right: true}, 
							React.createElement(bootstrap.NavItem, {href: "#"}, "确定")
						)
				) 
			);
		}
	});

	var PeopleForm = React.createClass({displayName: "PeopleForm",
		render: function(){
			return (
				React.createElement(bootstrap.Grid, null, 
					React.createElement("form", null, 
						React.createElement(bootstrap.Row, {className: "show-grid"}, 
							React.createElement(bootstrap.Col, {xs: 4, xsOffset: 4, md: 6, mdOffset: 3}, 
								React.createElement(bootstrap.Image, {src: "../../assets/image/avatar.png", thumbnail: true})
							)
						), 
						React.createElement("hr", null), 
						React.createElement(bootstrap.Row, {className: "show-grid"}, 
							React.createElement(bootstrap.Col, {xs: 8, xsOffset: 2, md: 6, mdOffset: 3}, 
								React.createElement(bootstrap.Input, {type: "text", name: "username", placeholder: "姓名", required: true}), 
								React.createElement(bootstrap.Input, {type: "password", name: "password", placeholder: "备注", required: true}), 
								React.createElement(bootstrap.Input, {type: "text", name: "username", placeholder: "手机", required: true}), 
								React.createElement(bootstrap.Input, {type: "password", name: "password", placeholder: "邮箱", required: true}), 
								React.createElement(bootstrap.Input, {type: "text", name: "username", placeholder: "QQ", required: true}), 
								React.createElement(bootstrap.Input, {type: "password", name: "password", placeholder: "住址", required: true}), 
								React.createElement(bootstrap.Button, {bsStyle: "primary", style: buttonStyle, type: "submit"}, "登录")
							)	
						)
					)
				)	
			);
		}
	});

	ReactDOM.render(React.createElement(PeopleBox, null), document.getElementById('content'));

/***/ }
])