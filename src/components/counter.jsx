import React, { Component } from "react";
//Controlled Component  so remove this.state
class Counter extends Component {
  // rendertags() {
  //   if (this.state.tags.length == 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>tag</li>
  //       ))}
  //     </ul>
  //   );
  // }
  constructor(props) {
    super(props);
    console.log("Counter-Constructor");
  }
  componentDidMount() {
    console.log("Counter - Mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value != this.props.counter.value) {
      console.log("changed");
      // PUT AJAX CALL HERE....
    }
  }
  componentWillUnmount() {
    console.log("Counter-Unmounting....");
  }
  render() {
    console.log("Counter - Rendering...");
    return (
      <div>
        {/* {this.state.tags.length == 0 && "Please add Tags!"} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
        {/* {this.rendertags()} */}
      </div>
    );
  }

  formatCount = () => {
    if (this.props.counter.value === 0) {
      return <h2>Zero</h2>;
    }
    return this.props.counter.value;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
