import react from 'react'
import '../style/photoGallery.css'
import Navbar from './Navbar'

function photoGallery(){
    return (
        <> <Navbar/>
       <div class="home container mt-5">

        <h3 class="home-stretch">Recent Photo Galleries
            
                 <a href="#" class="see-all">See More <span> &#62;</span></a>

        </h3>
         <div class="row mt-4">
             <div class="col-md-3">
                 <div class="card">
                   <img src="https://infobeans-intranet.web.app/assets/images/img-card-gallery.png" class="card-img-top" alt="..."/>
                     <div class="card-body">

                         <p class="card-text"> International Women’s day 2020 Celebration – CITP Indore office</p>
                         <a href="#" class="facebook">View on Facebook <span> &#62;</span> </a>
                     </div>
                </div>
             </div>
             <div class="col-md-3 ">
                 <div class="card">
                     <img src="https://infobeans-intranet.web.app/assets/images/img-card-gallery.png" class="card-img-top" alt="..." />
                     <div class="card-body">

                         <p class="card-text"> International Women’s day 2020 Celebration – CITP Indore office</p>
                         <a href="#" class="facebook">View on Facebook <span> &#62;</span></a>
                     </div>
             </div>
             </div>
            <div class="col-md-3">
                <div class="card">
                     <img src="https://infobeans-intranet.web.app/assets/images/img-card-gallery.png" class="card-img-top" alt="..." />
                     <div class="card-body">

                         <p class="card-text"> International Women’s day 2020 Celebration – CITP Indore office</p>
                         <a href="#" class="facebook">View on Facebook <span> &#62;</span></a>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </>
    );
}
export default photoGallery;
