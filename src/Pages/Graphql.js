import React, { useState } from "react";
import { ReactComponent as Trash } from "../svg/trash.svg";
import { gql, useQuery, useMutation, NetworkStatus } from "@apollo/client";
import { Pagination } from "@material-ui/lab";
import { v1 as uuidv1 } from "uuid"

const ALL_POSTS = gql`
  query allPosts($page: Int, $perPage: Int) {
    allPosts(page: $page, perPage: $perPage) {
      id
      name
    }
    _allPostsMeta {
      count
    }
  }
`;

function Graphql() {
  const [newItem, setNewItem] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);

  const { loading, error, data, refetch, networkStatus } = useQuery(ALL_POSTS, {
    variables: { page, perPage },
    notifyOnNetworkStatusChange: true,
  });

  const [addItem] = useMutation(gql`
    mutation createPost($id: ID!, $name: String!) {
      createPost(id: $id, name: $name) {
        id
        name
      }
    }
  `);

  const [deleteItem] = useMutation(gql`
    mutation removePost($id: ID!) {
      removePost(id: $id)
    }
  `);

  if (networkStatus === NetworkStatus.refetch) return "Refetching!";

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :( {error.message}</p>;

  return (
    <>
      <h3 className="text-2xl">Graphql</h3>
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
                  value={newItem}
                  onChange={(event) => setNewItem(event.target.value)}
                />
              </div>

              <div className="py-3 text-sm">
                {data.allPosts.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-start px-2 py-2 my-2 text-gray-700 rounded-md cursor-pointer hover:text-blue-400 hover:bg-blue-100"
                  >
                    <div className="flex-grow px-2 font-medium">
                      {item.name}
                    </div>

                    <Trash
                      alt="delete"
                      onClick={() => {
                        deleteItem({ variables: { id: item.id } });
                        refetch();
                      }}
                    />
                  </div>
                ))}
              </div>

              <Pagination
                count={Math.ceil(data._allPostsMeta.count / perPage)}
                defaultPage={page + 1}
              />

              <div className="block px-3 py-2 -mx-3 -mb-2 text-sm text-right bg-gray-200 rounded-b-lg">
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={() => {
                    addItem({ variables: { id: uuidv1(), name: newItem } });
                    setNewItem("");
                    refetch();
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graphql;
