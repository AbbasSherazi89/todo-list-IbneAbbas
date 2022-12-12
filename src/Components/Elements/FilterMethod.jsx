import React from 'react'

const FilterMethod = () => {

  const arr=[34,90,23, 45, 12, 78, 62, 60, 27]
  console.log(arr);
  console.log(arr.slice().sort());
  console.log(arr);

  const filterfunction=()=>{
    const newArr=arr.filter((element, index)=>{
      return element>30;
    })
    console.log(newArr)
    document.body.innerHTML="<h1>New Array is:" + newArr + "</h1>";
  }
  
  return (
    <>
     <div className='.continaer'>
        <div className="row">
          <div className="col-md-7 col-filter">
            <h1>Using Filter Method to print number greater than 50 in an array.</h1>
            <h4 className='demo'>Here is our array: </h4> 
            <button className='btn btn-primary' onClick={()=>filterfunction()}>Click to filter</button>
          </div>
        </div>
     </div>

    </>
  )
}

export default FilterMethod
