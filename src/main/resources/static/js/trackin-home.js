'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _TextInputField = require('./common/TextInputField');

var _TextInputField2 = _interopRequireDefault(_TextInputField);

var _NumberInputField = require('./common/NumberInputField');

var _NumberInputField2 = _interopRequireDefault(_NumberInputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackinHome = function (_React$Component) {
	_inherits(TrackinHome, _React$Component);

	function TrackinHome(props) {
		_classCallCheck(this, TrackinHome);

		return _possibleConstructorReturn(this, (TrackinHome.__proto__ || Object.getPrototypeOf(TrackinHome)).call(this, props));
	}

	_createClass(TrackinHome, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					null,
					'What is the weather today in',
					_react2.default.createElement(_TextInputField2.default, { placeholder: 'Enter "city, country"' }),
					_react2.default.createElement(
						'button',
						{ onClick: this.handleWeathButtonClick },
						'Go!'
					)
				),
				_react2.default.createElement(
					'div',
					null,
					'Pick a number.. I\'ll tell you a joke',
					_react2.default.createElement(_NumberInputField2.default, null),
					_react2.default.createElement(
						'button',
						{ onClick: this.handleJokeButtonClick },
						'Go!'
					)
				),
				_react2.default.createElement(
					'div',
					null,
					'Enter two strings:',
					_react2.default.createElement(_TextInputField2.default, { placeholder: 'String 1' }),
					_react2.default.createElement(_TextInputField2.default, { placeholder: 'String 2' }),
					_react2.default.createElement(
						'button',
						{ onClick: this.handlePermutationButtonClick },
						'Go!'
					)
				)
			);
		}
	}]);

	return TrackinHome;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(TrackinHome, null), document.getElementById('root-trackin-home'));