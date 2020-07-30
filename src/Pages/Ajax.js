import React from "react";
import postApi from "../repositories/posts";

class Ajax extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    postApi.all()
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3 className="text-2xl">Ajax</h3>
      </div>
    );
  }
}

export default Ajax;
