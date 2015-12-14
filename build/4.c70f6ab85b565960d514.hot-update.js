webpackHotUpdate(4,[
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
		width: '50%'
	};

	var errorTip = {
		marginTop: '-10px',
		marginBottom: '10px',
		fontSize: '0.8em'
	};

	var navItemStyle = {
		paddingLeft: '0',
		marginLeft: '-10'
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
				React.createElement(bootstrap.Navbar, {bsSize: "xsmall"}, 
					React.createElement(bootstrap.Nav, {navbar: true, left: true}, 
						React.createElement(bootstrap.NavItem, {href: "/contacts", style: navItemStyle}, "back")
					), 
					React.createElement(bootstrap.NavBrand, {bsSize: "xs"}, "G-address"), 
					React.createElement(bootstrap.Nav, {navbar: true, right: true}, 
						React.createElement(bootstrap.NavItem, {href: "#", style: navItemStyle}, "done")
					)
				)
			);
		}
	});

	var PeopleForm = React.createClass({displayName: "PeopleForm",
		getInitialState: function() {
			return {
				name: 'testName',
				backup: 'test',
				tel: '12345678910',
				email: 'test@test.com',
				qq: '12345678910',
				address: 'testAddress',
				telError: '',
				telStyle: '',
				emailError: '',
				emailStyle: '',
				qqError: '',
				qqStyle: '',
				disabled: 'true',
				buttonText: 'Edit',
				buttonState: 'primary'
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

		handleButton: function(){
			if(this.state.buttonText == 'Save'){
				alert('Sorry!The back-end project haven\'t been developed complete.')
			}
			else{
				this.setState({
					disabled: false,
					buttonText: 'Save',
					buttonState: 'success'
				});
			}
		},

		render: function(){
			return (
				React.createElement(bootstrap.Grid, null, 
					React.createElement("form", null, 
						React.createElement(bootstrap.Row, {className: "show-grid"}, 
							React.createElement(bootstrap.Col, {xs: 6, xsOffset: 3, md: 4, mdOffset: 4, lg: 4, lgOffset: 4}, 
								React.createElement(bootstrap.Image, {src: "../../assets/image/avatar.png", thumbnail: true})
							)
						), 
						React.createElement("hr", null), 
						React.createElement(bootstrap.Row, {className: "show-grid"}, 
							React.createElement(bootstrap.Col, {xs: 12, md: 8, mdOffset: 2, lg: 8, lgOffset: 2}, 
								React.createElement(bootstrap.Input, {type: "text", ref: "name", value: this.state.name, name: "name", placeholder: "name", onChange: this.handleName, disabled: this.state.disabled, addonBefore: "姓名", hasFeedback: true, required: true, hasFeedback: true}), 

								React.createElement(bootstrap.Input, {type: "text", name: "backup", placeholder: "backup", value: this.state.backup, onChange: this.handleBackup, disabled: this.state.disabled, addonBefore: "备注", hasFeedback: true}), 

								React.createElement(bootstrap.Input, {type: "text", name: "tel", placeholder: "telnum", help: this.state.telError, value: this.state.tel, required: true, onChange: this.handleTel, bsStyle: this.state.telStyle, disabled: this.state.disabled, addonBefore: "电话", hasFeedback: true}), 
								
								React.createElement(bootstrap.Input, {type: "text", name: "email", placeholder: "email", help: this.state.emailError, value: this.state.email, onChange: this.handleEmail, bsStyle: this.state.emailStyle, disabled: this.state.disabled, addonBefore: "邮箱", hasFeedback: true}), 
								
								React.createElement(bootstrap.Input, {type: "text", name: "qq", placeholder: "QQ", help: this.state.qqError, value: this.state.qq, onChange: this.handleQq, bsStyle: this.state.qqStyle, disabled: this.state.disabled, addonBefore: "QQ  ", hasFeedback: true}), 
								
								React.createElement(bootstrap.Input, {type: "text", name: "address", placeholder: "address", value: this.state.address, onChange: this.handleAddress, disabled: this.state.disabled, addonBefore: "地址"}), 
								React.createElement(bootstrap.ButtonGroup, {justified: true}, 
									React.createElement(bootstrap.Button, {bsStyle: this.state.buttonState, style: buttonStyle, onClick: this.enableInput}, this.state.buttonText), 
									React.createElement(bootstrap.Button, {bsStyle: "danger", style: buttonStyle}, "Delete")
								)
							)	
						)
					)
				)	
			);
		}
	});

	ReactDOM.render(React.createElement(PeopleBox, null), document.getElementById('content'))

/***/ }
])