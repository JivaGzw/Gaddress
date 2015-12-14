webpackHotUpdate(3,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var bootstrap = __webpack_require__(159);

	var formStyle = {
		marginTop: '20%'
	};

	var buttonStyle = {
		width: '100%'
	};

	var smallFont = {
		fontSize: '0.8em'
	};

	var LoginBox = React.createClass({displayName: "LoginBox",
		render: function(){
			return(
				React.createElement(bootstrap.Grid, null, 
					React.createElement(LoginForm, null)
				)
			);
		}
	});

	var LoginForm = React.createClass({displayName: "LoginForm",
		render: function(){
			return(
				React.createElement("form", {method: "post", action: "#", style: formStyle}, 
				  React.createElement(bootstrap.Row, {className: "show-grid"}, 
						React.createElement(bootstrap.Col, {xs: 10, xsOffset: 1, md: 6, mdOffset: 3}, 
							React.createElement("h3", null, React.createElement("center", null, React.createElement("strong", null, "登录"))), 
							React.createElement("hr", null), 
							React.createElement(bootstrap.Input, {type: "text", name: "username", placeholder: "用户名", required: true}), 
							React.createElement(bootstrap.Input, {type: "password", name: "password", placeholder: "密码", required: true}), 
							React.createElement(bootstrap.Button, {bsStyle: "primary", style: buttonStyle, type: "submit"}, "登录"), 
							React.createElement("h5", null, React.createElement("center", null, React.createElement("a", {href: "#", style: smallFont}, "立即注册"))), 
							React.createElement("h5", null, React.createElement("center", null, React.createElement("a", {href: "/contacts", style: smallFont}, "返回")))
						)	
					)	
				)
			);
		}
	});

	ReactDOM.render(React.createElement(LoginBox, null), document.getElementById("content"));

/***/ }
])