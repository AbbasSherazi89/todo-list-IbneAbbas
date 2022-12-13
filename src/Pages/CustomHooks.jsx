import React, {useState} from "react";
import useFetch from "../Components/Elements/useFetch";
const CustomHooks = () => {
  const {
    data: images,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/photos");

  const [listData, setListData] = useState([]);
  
  // const {
  //   data: todos,
  // } = useFetch("https://jsonplaceholder.typicode.com/todos");

  // const arr=[{todos}]
  // console.log(todos);

  // To get the first 21 values of API
  let size = 9;

  if (loading) return <h1 className="text-center">Loading...</h1>;
  if (error) console.log(error);

  const removeCard = (i) => {
    const updatedList=images.filter((element, id)=>{
      return i!==id;
  })
  setListData(updatedList);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {images.slice(0, size).map((val, id) => {
            return (
              <div className="col-md-4 py-5" key={id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={val.thumbnailUrl}
                    alt=" "
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <br />
                    <div className="d-flex">
                      <a href={val.url} className="btn btn-outline-success">
                        Link of Image
                      </a>
                      <button
                        className="btn btn-outline-danger ms-auto"
                        onClick={() => removeCard(id)}
                      >
                        Remove card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* {(JSON.stringify(data))} */}
    </>
  );
};

export default CustomHooks;
