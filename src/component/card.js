import React from "react"
import '../style/photoGallery.css'
function Card(props) {
    console.log(props.data.fileName)
    return (
        <>
            
        <div className= "col-md-3 py-3 py-sm-0">
                <div class="card" style={{height: "345px",
    width: "262px"}}>
  <img class="card-img-top" src={"http://localhost:9000/uploads/" + props.data.filePath} className="card-img" alt="Card image cap" style={{height: "233px"}}/>
  <div class="card-body">
      <div>
      <p class="card-text">{props.data.content}</p>
      </div>
      <a href="#" class="facebook">View on Facebook <span className=""> &#62;</span></a>
  </div>
</div>
                
        </div>
               
        <div className="footer">
         © Copyright 2020 InfoBeans. All Rights Reserved.
          </div>
            {/* <div className="row mt-4">
                <div className="col-md-3">

                    <div className="card" style={{ width: '18rem' }}>
                        <img src={"http://localhost:9000/uploads/" + props.data.filePath} className="card-img" alt="my image" />
                    </div>
                </div>
                <div className="card-body">
                <div>
                    <p className="card-text">{props.data.content}</p>
                </div>
                <a href="#" class="facebook">View on Facebook <span> &#62;</span></a>
            </div>
            </div> */}

           
        </>
    )
}
export default Card;

