webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var bootstrap = __webpack_require__(159);

	var navItemStyle = {
		width: '100px'
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
					React.createElement(ContactList, {data: this.state.data})
				)
			);
		}
	});

	var ContactHeader = React.createClass({displayName: "ContactHeader",
		render: function(){
			return (
				React.createElement(bootstrap.Navbar, null, 
					React.createElement(bootstrap.NavBrand, {style: navItemStyle}, "G-Address"), 
					React.createElement(bootstrap.Nav, {right: true}, 
						React.createElement(bootstrap.NavItem, {href: "/login", style: navItemStyle}, "登录")
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
				React.createElement(bootstrap.ListGroupItem, null, 
					this.props.children
				)
			);
		}
	});

	ReactDOM.render(React.createElement(ContactBox, {url: "/contacts/data"}), document.getElementById("content"));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
])