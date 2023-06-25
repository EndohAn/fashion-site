import './promo.css'
import promoImg from './../../img/images/header-img.jpg';

const Promo = () => {
    return (
		<section className="promo">
			<div className="container">
				<div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							{/* чтобы    не уходил под фон, добавми еще спан(поднимем наверх текст через позишн релатив) */}
							<span class="highlight">
								<span>LET’S</span>
							</span>
							EXPLORE
							<span class="highlight highlight--yellow">
								<span>UNIQUE</span>
							</span>
							CLOTHES.
						</div>
						<div className="promo__desc">
							Live for Influential and Innovative fashion!
						</div>
						<div className="promo__btn-wrapper">
							<a href="#!" className="promo__btn">
								Shop Now
							</a>
						</div>
					</div>
					<div className="promo__img">
						<img src={promoImg} alt="Promo" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Promo;