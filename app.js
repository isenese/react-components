class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovering: false
    }
  }
  onMouserOverItem () {
    this.setState ({
      hovering: true
    })
  }
  onMouseOutItem () {
    this.setState ({
      hovering: false
    })
  }
  render () {
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };
    // var style = {
    //   fontWeight: 'normal',
    // }
    return (
        <ul>
          <li
            style={style}
            onMouseOver={this.onMouserOverItem.bind(this)}
            onMouseOut={this.onMouseOutItem.bind(this)}
            >{this.props.item}</li>
        </ul>
    )
 };

}

var GroceryList = (props) => (
  <div> Grocery List
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList items={['kale', 'cucumbers']} />, document.getElementById('app'));
