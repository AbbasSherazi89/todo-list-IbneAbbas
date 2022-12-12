import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
const TodoComp = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    setListData((listData) => {
      const updatedlist = [...listData, activity];
      console.log(updatedlist);
      setActivity("");
      return updatedlist;
    });
  };

  const removeActivity=(i)=>{
    const updatedList=listData.filter((element, id)=>{
        return i!==id;
    })
    setListData(updatedList);
  }

  const removeAll=()=>{
    setListData([]);
  }
  return (
    <>
      <div className="container todo-container">
        <div className="row mt-5 py-3">
          <div className="col-md-8 first-col">
            <div className="header">TODO LIST</div>
            <input
              type="text"
              placeholder="Add an Activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <button className="btn btn-info" onClick={() => addActivity()}>
              Add
            </button>
            <div className="your-list">
              <h1>
                Your List: <BsEmojiSmile size={30} />{" "}
              </h1>
              {listData !== [] &&
                listData.map((data, i) => {
                  return (
                    <div className="main-listdata">
                      <div key={i} className="listData">
                        <h3 > {data} </h3>
                        
                      </div>
                      <button className="btn btn-danger" onClick={()=>removeActivity(i)}>Remove</button>
                    </div>
                  );
                })}

                {listData.length>=1 && <button className="btn btn-danger" onClick={()=>removeAll()}>Remove all</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoComp;
