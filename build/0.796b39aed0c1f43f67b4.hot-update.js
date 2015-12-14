webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var bootstrap = __webpack_require__(159);

	var pullRight = {
		float: "right",
		marginRight: "5%"
	};

	var footStyle = {
		position: "absolute",
		bottom: "0",
		height: "50px",
		width: "100%",
		borderTop: "1px solid #ccc"
	};

	var centerDiv = {
		textAlign: "center",
		margin: "0 auto"
	};

	var roundButton = {
		marginTop: "5px",
		padding: "3px 0 0 2px",
		textAlign: "center",
		width: "35px",
		height: "35px",
		borderRadius: "50%"
	};

	var ContactBox = React.createClass({displayName: "ContactBox",
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
				React.createElement("div", null, 
					React.createElement(ContactHeader, null), 
					React.createElement(ContactList, {data: this.state.data}), 
					React.createElement(ContactFoot, null)
				)
			);
		}
	});

	var ContactHeader = React.createClass({displayName: "ContactHeader",
		render: function(){
			return (
				React.createElement(bootstrap.Navbar, {toggleNavKey: 0}, 
					React.createElement(bootstrap.NavBrand, null, "G-Address"), 
					React.createElement(bootstrap.CollapsibleNav, {eventKey: 0}, 
						React.createElement(bootstrap.Nav, {navbar: true, right: true}, 
							React.createElement(bootstrap.NavItem, {href: "/login", eventKey: 1}, "登录")
						)
					)
				)
			);
		}
	});

	var ContactList = React.createClass({displayName: "ContactList",
		render: function(){
			var contactNodes = this.props.data.map(function(contact, index){
				return (
					React.createElement(Contact, {key: index}, contact.name)
				);
			});

			return (
				React.createElement(bootstrap.ListGroup, null, 
					contactNodes
				)
			);
		}
	});

	var Contact = React.createClass({displayName: "Contact",
		render: function(){
			return (
				React.createElement(bootstrap.ListGroupItem, {href: "#"}, 
					this.props.children, 
					React.createElement("span", null, React.createElement(bootstrap.Glyphicon, {glyph: "chevron-right", style: pullRight}))
				)
			);
		}
	});

	var ContactFoot = React.createClass({displayName: "ContactFoot",
		render: function(){
			return (
				React.createElement("div", {style: footStyle}, 
					React.createElement("div", {style: centerDiv}, 
						React.createElement(bootstrap.Button, {href: "/edit", bsSize: "large", bsStyle: "info", style: roundButton}, 
							React.createElement(bootstrap.Glyphicon, {glyph: "plus"})
						)
					)
				)
			);
		}
	});

	ReactDOM.render(React.createElement(ContactBox, {url: "/contacts/data"}), document.getElementById("content"));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
])