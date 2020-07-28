import React from "react";
import { connect } from "react-redux";
import { setName, setAge } from "../redux/actions/userActions";
import { addNumber, subtractNumber } from "../redux/actions/counterActions";

class Redux extends React.Component {
  constructor(props) {
    super(props);

    this.changeUserName = this.changeUserName.bind(this);
    this.changeUserAge = this.changeUserAge.bind(this);
  }

  changeUserName(event) {
    this.props.setName(event.target.value);
  }

  changeUserAge(event) {
    this.props.setAge(event.target.value);
  }

  render() {
    return (
      <div>
        <h3 className="text-2xl">Redux</h3>
        <div>
          <p>user : {JSON.stringify(this.props.user, null, 2)}</p>
          <p>counter : {JSON.stringify(this.props.counter, null, 2)}</p>
        </div>
        <div className="w-full max-w-xs">
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="User Name"
              value={this.props.user.name}
              onChange={this.changeUserName}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="userage"
            >
              User Age
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="userage"
              type="number"
              placeholder="User Age"
              value={this.props.user.age}
              onChange={this.changeUserAge}
            />
          </div>
          <div className="mb-4">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={() => {
                this.props.addNumber(1);
              }}
            >
              +
            </button>
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={() => {
                this.props.subtractNumber(1);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    setAge: (age) => {
      dispatch(setAge(age));
    },
    addNumber: (number) => {
      dispatch(addNumber(number));
    },
    subtractNumber: (number) => {
      dispatch(subtractNumber(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
