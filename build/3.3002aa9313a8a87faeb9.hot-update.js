webpackHotUpdate(3,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var bootstrap = __webpack_require__(159);

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
							React.createElement(bootstrap.NavItem, {href: "/contacts", eventKey: 1}, "取消")
						), 
						React.createElement(bootstrap.Nav, {navbar: true, right: true}, 
							React.createElement(bootstrap.NavItem, {eventKey: 2}, "确定")
						)
				) 
			);
		}
	});

	var PeopleForm = React.createClass({displayName: "PeopleForm",
		render: function(){
			return (
				React.createElement("form", null)
			);
		}
	});

	ReactDOM.render(React.createElement(PeopleBox, null), document.getElementById('content'));

/***/ }
])