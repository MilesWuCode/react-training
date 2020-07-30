import React from "react";
import postApi from "../repositories/posts";
import Trash from "../svg/trash.svg";

class Ajax extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      items: [],
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    postApi
      .all({
        params: {
          _page: 1,
          _limit: 5,
          _sort: "id",
          _order: "desc",
        },
      })
      .then(({ data }) => {
        this.setState({ items: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createItem() {
    postApi
      .create({
        data: {
          name: this.state.newItem,
        },
      })
      .then(({ data }) => {
        this.setState({ newItem: "" });

        this.getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteItem(id) {
    postApi
      .delete(id)
      .then(({ data }) => {
        console.log(data);
        this.getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3 className="text-2xl">Ajax</h3>
        <div className="w-full max-w-screen-xl px-6 mx-auto">
          <div className="flex justify-center p-4 px-3 py-10">
            <div className="w-full max-w-md">
              <div className="px-3 py-2 mb-4 bg-white rounded-lg shadow-md">
                <div className="block px-2 py-2 text-lg font-semibold text-gray-700">
                  Item List
                </div>
                <div className="flex items-center bg-gray-200 rounded-md">
                  <div className="pl-2">
                    <svg
                      className="w-6 h-6 text-gray-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="heroicon-ui"
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      />
                    </svg>
                  </div>
                  <input
                    className="w-full px-2 py-2 leading-tight text-gray-700 bg-gray-200 rounded-md focus:outline-none"
                    id="search"
                    type="text"
                    placeholder="Search teams or members"
                    value={this.state.newItem}
                    onChange={(event) => {
                      this.setState({ newItem: event.target.value });
                    }}
                  />
                </div>
                <div className="py-3 text-sm">
                  {this.state.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-start px-2 py-2 my-2 text-gray-700 rounded-md cursor-pointer hover:text-blue-400 hover:bg-blue-100"
                    >
                      <div className="flex-grow px-2 font-medium">
                        {item.name}
                      </div>
                      <img
                        src={Trash}
                        onClick={() => {
                          this.deleteItem(item.id);
                        }}
                        alt="delete"
                      />
                    </div>
                  ))}
                </div>
                <div className="block px-3 py-2 -mx-3 -mb-2 text-sm text-right bg-gray-200 rounded-b-lg">
                  <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={() => {
                      this.createItem();
                    }}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ajax;
