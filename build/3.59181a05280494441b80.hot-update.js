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

		nameState: function() {
			var length = this.state.name.length;
			if (length > 10) return 'success';
			else if (length > 5) return 'warning';
			else if (length > 0) return 'error';
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
			var tel = e.terget.value;
			this.setState({tel: tel});
		},

		handleEmail: function(e){
			var email = e.target.value;
			this.setState({email: email});
		},

		handleQq: function(e){
			var qq = e.target.value;
			this.setState({qq: qq});
		},

		handleAddress: function(e){
			var address = e.target.value;
			this.setState({address: address});
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
								React.createElement(bootstrap.Input, {type: "text", ref: "name", value: this.state.name, name: "name", placeholder: "姓名", onChange: this.handleName, hasFeedback: true, required: true}), 
								React.createElement(bootstrap.Input, {type: "text", name: "backup", placeholder: "备注", value: this.state.backup, onChange: this.handleBackup}), 
								React.createElement(bootstrap.Input, {type: "text", name: "tel", placeholder: "手机", value: this.state.tel, required: true, onChange: this.handleTel}), 
								React.createElement(bootstrap.Input, {type: "text", name: "email", placeholder: "邮箱", value: this.state.email, onChange: this.handleEmail}), 
								React.createElement(bootstrap.Input, {type: "text", name: "qq", placeholder: "QQ", value: this.state.qq, onChange: this.handleQq}), 
								React.createElement(bootstrap.Input, {type: "text", name: "address", placeholder: "住址", value: this.state.address, onChange: this.handleAddress}), 
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