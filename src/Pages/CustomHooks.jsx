import React from "react";
import useFetch from "../Components/Elements/useFetch";
const CustomHooks = () => {
  const {
    data: images,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/photos");

  
  if (loading) return <h1 className="text-center">Loading...</h1>;
  if (error) console.log(error);

  return (
    <>
      <div className="container">
        <div className="row">
          {images.map((val, id) => {
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
                    <a href={val.url} className="btn btn-outline-success">
                      Link of Image
                    </a>
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
