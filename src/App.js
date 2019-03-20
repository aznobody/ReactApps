import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props); //here this.props is undefined so pass props as argument
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrements = counter => {
    console.log(counter);
    const counters = [...this.state.counters]; //clone the counters array
    const index = counters.indexOf(counter); //find index of counter object that needs to be incremented
    counters[index] = { ...counter }; //clone that particular index
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(x => x.id != counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App- Rendering...");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrements}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
