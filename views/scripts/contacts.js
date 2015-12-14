var React = require('react');
var ReactDOM = require('react-dom');
var bootstrap = require('react-bootstrap');

var pullRight = {
	float: "right",
	marginRight: "5%"
};

var footStyle = {
	position: "fixed",
	backgroundColor: "#fff",
	bottom: "0",
	height: "45px",
	width: "100%",
	borderTop: "1px solid #ccc"
};

var centerDiv = {
	textAlign: "center",
	margin: "0 auto"
};

var roundButton = {
	marginTop: "5px",
	padding: "6px 0 0 3px",
	textAlign: "center",
	width: "35px",
	height: "35px",
	borderRadius: "50%"
};

var blockStyle = {
	width: "100%",
	height: "45px"
};

var ContactBox = React.createClass({
	LoadContactsFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	getInitialState: function() {
		return {data: []};
	},

	componentDidMount: function(){
		this.LoadContactsFromServer();
	},

	render: function(){
		return (
			<div>
				<ContactHeader></ContactHeader>
				<ContactList data={this.state.data}></ContactList>
				<div style={blockStyle}></div>
				<ContactFoot></ContactFoot>
			</div>
		);
	}
});

var ContactHeader = React.createClass({
	render: function(){
		return (
			<bootstrap.Navbar toggleNavKey={0}>
				<bootstrap.NavBrand>G-Address</bootstrap.NavBrand>
				<bootstrap.CollapsibleNav eventKey={0}>
					<bootstrap.Nav navbar right>
						<bootstrap.NavItem href="/login" eventKey={1}>Login</bootstrap.NavItem>
					</bootstrap.Nav>
				</bootstrap.CollapsibleNav>
			</bootstrap.Navbar>
		);
	}
});

var ContactList = React.createClass({
	render: function(){
		var contactNodes = this.props.data.map(function(contact, index){
			return (
				<Contact key={index}>{contact.name}</Contact>
			);
		});

		return (
			<bootstrap.ListGroup>
				{contactNodes}
			</bootstrap.ListGroup>
		);
	}
});

var Contact = React.createClass({
	render: function(){
		return (
			<bootstrap.ListGroupItem href="/people">
				{this.props.children}
				<span><bootstrap.Glyphicon glyph="chevron-right" style={pullRight}/></span>
			</bootstrap.ListGroupItem>
		);
	}
});

var ContactFoot = React.createClass({
	render: function(){
		return (
			<div style={footStyle}>
				<div style={centerDiv}>
					<bootstrap.Button href="/people/new" bsSize="large" bsStyle="info" style={roundButton}>
						<bootstrap.Glyphicon glyph="plus" />
					</bootstrap.Button>
				</div>
			</div>
		);
	}
});

ReactDOM.render(<ContactBox url="/contacts/data" />, document.getElementById("content"));