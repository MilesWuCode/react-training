import React from "react";
import { connect } from "react-redux";
import { setName, setAge } from "../redux/actions/userActions";

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
        <h3>Redux</h3>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
