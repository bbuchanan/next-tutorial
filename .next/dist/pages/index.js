'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/billbuchanan/projects/react/tutorial/next-tutorial/pages/index.js?entry';


var indexPage = function indexPage() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'The Main Page'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Go to ', _react2.default.createElement(_link2.default, { href: '/auth', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Auth'))), _react2.default.createElement('button', { onClick: function onClick() {
      return _index2.default.push('/auth');
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Go to Auth'));
};

exports.default = indexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlJvdXRlciIsImluZGV4UGFnZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxZQUFZLFNBQVosQUFBWSxZQUFBO3lCQUNoQixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxrQ0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBUywwQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUFtQjtBQUFuQjtxQkFBbUIsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRjlCLEFBRUUsQUFBUyxBQUFtQixBQUM1QiwyQkFBQSxjQUFBLFlBQVEsU0FBUyxtQkFBQTthQUFNLGdCQUFBLEFBQU8sS0FBYixBQUFNLEFBQVk7QUFBbkM7Z0JBQUE7a0JBQUE7QUFBQTtLQUpjLEFBQ2hCLEFBR0U7QUFKSixBQVFBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9iaWxsYnVjaGFuYW4vcHJvamVjdHMvcmVhY3QvdHV0b3JpYWwvbmV4dC10dXRvcmlhbCJ9