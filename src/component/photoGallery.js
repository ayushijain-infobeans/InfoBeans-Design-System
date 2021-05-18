import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../style/photoGallery.css'
import Navbar from './Navbar'
import Card from './card'
import axios from 'axios'

function PhotoGallery(props) {
    let history = useHistory()
    if (!sessionStorage.token) {
        history.push("/login")
    }

    const [member, setmember] = useState([])

    useEffect(() => {
        console.log("hello")
        axios({
            method: 'get',
            url: "http://localhost:9000/api/getSingleFiles"
        }).then((response) => {

            console.log("hello ayushi" + response.data)
            setmember(response.data)

        }, (error) => {
            console.log("Error from api", error)
        })
    }, []);

    console.log(props.data)
    return (
        <><Navbar />
<br/><br/>
            <div clasName="home-container" style={{paddingLeft:"192px", margin:"29px"}}>
                    <h2 className="home-stretch">Photo Gallery
                    
                    <a href="#" class="see-all">See More <span> &#62;</span></a></h2>
                    <br/>
<div className="row">
    {member.map(function (each) {
                    console.log("each", each);
                    return <Card data={each} key={each._id} />;
                })}
</div>
                
            </div>


        </>
    )
}
export default PhotoGallery



