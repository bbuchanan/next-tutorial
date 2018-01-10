'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _User = require('../../components/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/billbuchanan/projects/react/tutorial/next-tutorial/pages/auth/index.js?entry';


var authIndexPage = function authIndexPage(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'The Auth Index Page - ', props.appName), _react2.default.createElement(_User2.default, { name: 'Max', age: 28, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

authIndexPage.getInitialProps = function (context) {
  var promise = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve({ appName: "Supper App" });
    }, 1000);
  });
  return promise;
};
exports.default = authIndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2F1dGgvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJVc2VyIiwiYXV0aEluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJwcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFFakIsSUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0IsY0FBQSxBQUFDLE9BQUQ7eUJBQ3BCLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQTJCLGdDQUQ3QixBQUNFLEFBQWlDLEFBQ2pDLDBCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXLE9BQU0sS0FBakIsQUFBc0I7Z0JBQXRCO2tCQUhrQixBQUNwQixBQUVFO0FBQUE7O0FBSEo7O0FBT0EsY0FBQSxBQUFjLGtCQUFrQixVQUFBLEFBQUMsU0FBWSxBQUN6QztNQUFNLGdDQUFzQixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDL0M7ZUFBVyxZQUFNLEFBQ2Y7Y0FBUSxFQUFFLFNBQVYsQUFBUSxBQUFXLEFBQ3BCO0FBRkQsT0FBQSxBQUVHLEFBQ0o7QUFKRCxBQUFnQixBQUtoQixHQUxnQjtTQUtoQixBQUFPLEFBQ1I7QUFQSCxBQVFBO2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JpbGxidWNoYW5hbi9wcm9qZWN0cy9yZWFjdC90dXRvcmlhbC9uZXh0LXR1dG9yaWFsIn0=