import react from 'react';
import '../style/photoGallery.css'

function photoGallery(){
    return (
        <div class="home-container">
             <h3 class="home-stretch color-grey ">Recent Photo Galleries
            <span>
                <a href="#" class="see-all">See More <span> &#62;</span></a>
            </span>

        </h3>
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <img src="../image/sample-profile-image.jpg" class="card-img-top" alt="..." height="226px"/>
                    <div class="card-body">

                        <p class="card-text"> International Women’s day 2020 Celebration – CITP Indore office</p>
                        <a href="#" class="facebook">View on Facebook <span> &#62;</span> </a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="../images/card-image.jfif" class="card-img-top" alt="..." height="226px"/>
                    <div class="card-body">

                        <p class="card-text"> International Women’s day 2020 Celebration – CITP Indore office</p>
                        <a href="#" class="facebook">View on Facebook <span> &#62;</span></a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="../images/card-image.jfif" class="card-img-top" alt="..." height="226px"/>
                    <div class="card-body">

                        <p class="card-text"> International Women’s day 2020 Celebration – CITP Indore office</p>
                        <a href="#" class="facebook">View on Facebook <span> &#62;</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}
export default photoGallery;