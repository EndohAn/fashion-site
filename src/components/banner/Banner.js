import './banner.css';
import bannerImg from'./../../img/images/promo-img.jpg';

const Banner = () =>{
    return(
        <section className='banner'>
            <div className='banner__container'>
                <div className='banner__wrapper'>
                    <div className="banner__img">
						<img src={bannerImg} alt="banner" />
					</div>
                    <div className='banner__text'>  
                         <div className='banner__title' >  
                            <span class="highlight">
								<span> PAYDAY     </span>
							</span> 
                            <br></br>Sale
                            Now                                                                         
                         </div>
                               <div className="banner__subtitle">
                                    Spend minimal $100 get 30% off voucher code for your next purchase
                                </div>
                                    <div className='banner__desc'>
                                        1 June - 10 June 2021
                                     </div>
                                <div className='banner__desc_sub'>
                                        *Terms & Conditions apply
                                </div>
                         <div >
							<a href="#!" className="promo__btn">
								Shop Now
							</a>
                        </div>
					</div>
                </div>
            </div>          
        </section>
        
    );
}
export default Banner;