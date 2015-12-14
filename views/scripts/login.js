var React = require('react');
var ReactDOM = require('react-dom');
var bootstrap = require('react-bootstrap');

var formStyle = {
	marginTop: '20%'
};

var buttonStyle = {
	width: '100%'
};

var smallFont = {
	fontSize: '0.8em'
};

var LoginBox = React.createClass({
	render: function(){
		return(
			<bootstrap.Grid>
				<LoginForm ></LoginForm>
			</bootstrap.Grid>
		);
	}
});

var LoginForm = React.createClass({
	render: function(){
		return(
			<form method="post" action="#" style={formStyle}>
			  <bootstrap.Row className="show-grid">
					<bootstrap.Col xs={10} xsOffset={1} md={6} mdOffset={3}>
						<h1><center><strong><small>Login</small></strong></center></h1>
						<hr/>
						<bootstrap.Input type="text" name="username" placeholder="username" required />
						<bootstrap.Input type="password" name="password" placeholder="password" required />
						<bootstrap.Button bsStyle="primary" style={buttonStyle} type="submit">Login</bootstrap.Button>
						<h5><center><a href="#" style={smallFont}>register</a></center></h5>
						<h5><center><a href="/contacts" style={smallFont}>back</a></center></h5>
					</bootstrap.Col>	
				</bootstrap.Row>	
			</form>
		);
	}
});

ReactDOM.render(<LoginBox />, document.getElementById("content"));