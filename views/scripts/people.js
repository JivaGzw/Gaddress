var React = require('react');
var ReactDOM = require('react-dom');
var bootstrap = require('react-bootstrap');

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

var PeopleBox = React.createClass({
	render: function(){
		return (
			<div>
				<PeopleHeader></PeopleHeader>
				<PeopleForm></PeopleForm>
				<FootText></FootText>
			</div>
		);
	}
});

var PeopleHeader = React.createClass({
	render: function(){
		return (
			<bootstrap.Navbar bsSize="xsmall">
				<bootstrap.Nav navbar left>
					<bootstrap.NavItem href="/contacts" style={navItemStyle}>back</bootstrap.NavItem>
				</bootstrap.Nav>
				<bootstrap.NavBrand bsSize="xs">G-address</bootstrap.NavBrand>
				<bootstrap.Nav navbar right>
					<bootstrap.NavItem href="#" style={navItemStyle}>done</bootstrap.NavItem>
				</bootstrap.Nav>
			</bootstrap.Navbar>
		);
	}
});

var PeopleForm = React.createClass({
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

	handleButtonEdit: function(){
		if(this.state.buttonText == 'Save'){
			alert('Sorry!The back-end project haven\'t been developed complete.');
		}
		else{
			this.setState({
				disabled: false,
				buttonText: 'Save',
				buttonState: 'success'
			});
		}
	},

	handleButtonDelete: function(){
		alert('Sorry!The back-end project haven\'t been developed complete.');
	},

	render: function(){
		return (
			<bootstrap.Grid>
				<form>
					<bootstrap.Row className="show-grid">
						<bootstrap.Col xs={6} xsOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
							<bootstrap.Image src="../../assets/image/avatar.png" thumbnail />
						</bootstrap.Col>
					</bootstrap.Row>
					<hr/>
					<bootstrap.Row className="show-grid">
						<bootstrap.Col xs={12} md={8} mdOffset={2} lg={8} lgOffset={2}>
							<bootstrap.Input type="text" ref="name" value={this.state.name} name="name" placeholder="name" onChange={this.handleName} disabled={this.state.disabled} addonBefore="姓名" hasFeedback required hasFeedback />

							<bootstrap.Input type="text" name="backup" placeholder="backup" value={this.state.backup} onChange={this.handleBackup} disabled={this.state.disabled} addonBefore="备注" hasFeedback />

							<bootstrap.Input type="text" name="tel" placeholder="telnum" help={this.state.telError} value={this.state.tel} required onChange={this.handleTel} bsStyle={this.state.telStyle} disabled={this.state.disabled} addonBefore="电话" hasFeedback />
							
							<bootstrap.Input type="text" name="email" placeholder="email" help={this.state.emailError} value={this.state.email} onChange={this.handleEmail} bsStyle={this.state.emailStyle} disabled={this.state.disabled} addonBefore="邮箱" hasFeedback />
							
							<bootstrap.Input type="text" name="qq" placeholder="QQ" help={this.state.qqError} value={this.state.qq} onChange={this.handleQq} bsStyle={this.state.qqStyle} disabled={this.state.disabled} addonBefore="QQ &nbsp;" hasFeedback />
							
							<bootstrap.Input type="text" name="address" placeholder="address" value={this.state.address} onChange={this.handleAddress} disabled={this.state.disabled} addonBefore="地址" />
							<bootstrap.ButtonGroup justified>
								<bootstrap.Button bsStyle={this.state.buttonState} style={buttonStyle} onClick={this.handleButtonEdit}>{this.state.buttonText}</bootstrap.Button>
								<bootstrap.Button bsStyle="danger" style={buttonStyle} onClick={this.handleButtonDelete}>Delete</bootstrap.Button>
							</bootstrap.ButtonGroup>
						</bootstrap.Col>	
					</bootstrap.Row>
				</form>
			</bootstrap.Grid>	
		);
	}
});

var FootText = React.createClass({
	render: function(){
		return (
			<div>
				<hr/>
				<h6><center>Powered by GZW</center></h6>
			</div>
		);
	}
});

ReactDOM.render(<PeopleBox/>, document.getElementById('content'))