'use strict';

var window = require('global/window');
var document = require('global/document');

var React = require('react');
var ReactDOM = require('react-dom');
var r = require('r-dom');


var App = React.createClass({
  render: function render() {
    return r.div([
      r.span('hello world'),
      r.svg({width: 300, height: 300}, [
        r.g({onClick:function() { alert('wow'); }}, [
          r.circle({r: 10, cx: 100, cy: 100, style: {fill: 'rgba(0, 0, 0, 1)'}})
        ])
      ])
    ]);
  }
});

var reactContainer = document.createElement('div');
document.body.style.margin = '0';
document.body.appendChild(reactContainer);
ReactDOM.render(r(App), reactContainer);