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
		getInitialState: function() {
			return {
				name: '',
				backup: '',
				tel: '',
				email: '',
				qq: '',
				address: '',
				telError: '',
				emailError: '',
				qqError: ''
			};
		},

		validationState: function() {
			var length = this.state.name.length;
			if (length > 10) return 'success';
			else if (length > 5) return 'warning';
			else if (length > 0) return 'error';
		},

		handleName: function(){
			var name = this.refs.name.value;
			this.setState({name: name});
		},

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
								React.createElement(bootstrap.Input, {type: "text", value: this.state.name, name: "name", placeholder: "姓名", ref: "name", onChange: this.handleName(), bsStyle: this.validationState(), hasFeedback: true, required: true}), 
								React.createElement(bootstrap.Input, {type: "text", name: "backup", ref: "backup", placeholder: "备注", value: this.state.backup}), 
								React.createElement(bootstrap.Input, {type: "text", name: "tel", ref: "tel", placeholder: "手机", value: this.state.tel, required: true}), 
								React.createElement(bootstrap.Input, {type: "text", name: "email", ref: "email", placeholder: "邮箱", value: this.state.email}), 
								React.createElement(bootstrap.Input, {type: "text", name: "qq", ref: "qq", placeholder: "QQ", value: this.state.qq}), 
								React.createElement(bootstrap.Input, {type: "text", name: "address", ref: "address", placeholder: "住址", value: this.state.address}), 
								React.createElement(bootstrap.Button, {bsStyle: "primary", style: buttonStyle, type: "submit"}, "添加更多项")
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