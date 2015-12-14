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
							React.createElement("h1", null, React.createElement("center", null, React.createElement("strong", null, React.createElement("small", null, "Login")))), 
							React.createElement("hr", null), 
							React.createElement(bootstrap.Input, {type: "text", name: "username", placeholder: "username", required: true}), 
							React.createElement(bootstrap.Input, {type: "password", name: "password", placeholder: "password", required: true}), 
							React.createElement(bootstrap.Button, {bsStyle: "primary", style: buttonStyle, type: "submit"}, "Login"), 
							React.createElement("h5", null, React.createElement("center", null, React.createElement("a", {href: "#", style: smallFont}, "register"))), 
							React.createElement("h5", null, React.createElement("center", null, React.createElement("a", {href: "/contacts", style: smallFont}, "back")))
						)	
					)	
				)
			);
		}
	});

	ReactDOM.render(React.createElement(LoginBox, null), document.getElementById("content"));

/***/ }
])