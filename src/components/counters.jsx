import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  constructor(props) {
    super(props);
    console.log("Counters-Constructor");
  }
  componentDidMount() {
    console.log("Counters - Mounted");
  }
  render() {
    console.log("Counters - Rendering...");
    const { counters, onReset, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            counter={counter} //better approach
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
