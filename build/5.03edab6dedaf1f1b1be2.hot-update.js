webpackHotUpdate(5,[
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
		margin: "0 auto",
		border: "solid 2px #000"
	};

	var centerDiv = {
		textAlign: "center",
		margin: "0 auto"
	};

	var buttonStyle = {
		width: '100%'
	};

	var errorTip = {
		marginTop: '-10px',
		marginBottom: '10px',
		fontSize: '0.8em'
	};

	var PhoneBox = React.createClass({displayName: "PhoneBox",
		render: function() {
			return (
				React.createElement("div", {style: phoneStyle}, 
					React.createElement(PeopleBox, null)
				)
			);
		}
	});

	var PeopleBox = React.createClass({displayName: "PeopleBox",
		render: function(){
			return (
				React.createElement("iframe", {width: "240px", height: "426px", src: "/contacts", style: screenStyle}, 
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
				telStyle: '',
				emailError: '',
				emailStyle: '',
				qqError: '',
				qqStyle: ''
			};
		},

		handleName: function(e){
			var name = e.target.value;
			this.setState({name: name});
		},

		handleBackup: function(e){
			var backup = e.target.value;
			this.setState({backup: backup});
		},

		handleTel: function(e){
			var tel = e.target.value;
			var error = '';
			var style = '';
			var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

			if(!(reg.test(tel))) {
				error = '请输入正确的手机号码';
				style = 'error';
			}
			else {
				style = 'success';
			}

			this.setState({
				tel: tel,
				telError: error,
				telStyle: style
			});
		},

		handleEmail: function(e){
			var email = e.target.value;
			var error = '';
			var style = '';
			var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

			if(!(reg.test(email))) {
				error = '请输入正确的email地址';
				style = 'error';
			}
			else {
				style = 'success';
			}
			this.setState({
				email: email,
				emailStyle: style,
				emailError: error
			});
		},

		handleQq: function(e){
			var qq = e.target.value;
			var error = '';
			var style = '';
			var reg = /^\d{5,11}$/;

			if(!(reg.test(qq))) {
				error = '请输入正确的qq号码';
				style = 'error';
			}
			else {
				style = 'success';
			}

			this.setState({
				qq: qq,
				qqError: error,
				qqStyle: style
			});
		},

		handleAddress: function(e){
			var address = e.target.value;
			this.setState({address: address});
		},

		qqState: function() {

		},

		render: function(){
			return (
				React.createElement(bootstrap.Grid, null, 
					React.createElement("form", null, 
						React.createElement(bootstrap.Row, {className: "show-grid"}, 
							React.createElement(bootstrap.Col, {xs: 4, xsOffset: 4, md: 4, mdOffset: 4, lg: 4, lgOffset: 4}, 
								React.createElement(bootstrap.Image, {src: "../../assets/image/avatar.png", thumbnail: true})
							)
						), 
						React.createElement("hr", null), 
						React.createElement(bootstrap.Row, {className: "show-grid"}, 
							React.createElement(bootstrap.Col, {xs: 8, xsOffset: 2, md: 8, mdOffset: 2, lg: 8, lgOffset: 2}, 
								React.createElement(bootstrap.Input, {type: "text", ref: "name", value: this.state.name, name: "name", placeholder: "姓名", onChange: this.handleName, hasFeedback: true, required: true, hasFeedback: true}), 

								React.createElement(bootstrap.Input, {type: "text", name: "backup", placeholder: "备注", value: this.state.backup, onChange: this.handleBackup, hasFeedback: true}), 

								React.createElement(bootstrap.Input, {type: "text", name: "tel", placeholder: "手机", help: this.state.telError, value: this.state.tel, required: true, onChange: this.handleTel, bsStyle: this.state.telStyle, hasFeedback: true}), 
								
								React.createElement(bootstrap.Input, {type: "text", name: "email", placeholder: "邮箱", help: this.state.emailError, value: this.state.email, onChange: this.handleEmail, bsStyle: this.state.emailStyle, hasFeedback: true}), 
								
								React.createElement(bootstrap.Input, {type: "text", name: "qq", placeholder: "QQ", help: this.state.qqError, value: this.state.qq, onChange: this.handleQq, bsStyle: this.state.qqStyle, hasFeedback: true}), 
								
								React.createElement(bootstrap.Input, {type: "text", name: "address", placeholder: "住址", value: this.state.address, onChange: this.handleAddress}), 
								React.createElement(bootstrap.Button, {bsStyle: "primary", style: buttonStyle, type: "submit"}, "添加更多项")
							)	
						)
					)
				)	
			);
		}
	});

	ReactDOM.render(React.createElement(PhoneBox, null), document.getElementById('content'));

/***/ }
])