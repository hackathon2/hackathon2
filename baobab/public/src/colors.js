var colorTree = new Baobab({
    colors:{
        hex: ['#f00','#0f0','#00f','#f0f','#ff0'],
        name: ['red','green','blue','magenta','yellow']
    }
});

var stateTree = new Baobab({
  admin: {
    notifications: {
      list: ['apple','banana','orange']
    }
  },
  home: {
    feeds: []
  }
});
/*
var colorCursor = colorTree.select('colors', 'hex', 'name');
var MyComponent = React.createClass({
  mixins: [colorCursor.mixin],
  renderNotification: function (notification) {
    return (
      <li>{hex.length}</li>
    );
  },
  render: function () {
    return (
      <ul>
        {this.state.cursor.map(this.renderNofication)}
      </ul>
    );
  }
});
/
*/
var listCursor = stateTree.select('admin', 'notifications', 'list');
var MyComponent = React.createClass({
  render: function () {
    return (
      <ul>  {this.state.list}
      </ul>
    );
  }
});
React.render(<MyComponent />, document.getElementById('foo'));