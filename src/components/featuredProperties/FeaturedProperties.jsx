import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="http://www.apartments.com/images/default-source/default-album/studio-apartment.tmb-featuredim.jpeg?sfvrsn=89883b80_0" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://www.lottehotel.com/content/dam/lotte-hotel/l7/hongdae/accommodation/suite/2762-180202-2000-acc-l7hd.jpg.thumb.768.768.jpg" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
            <button>9.2</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/13/8f/ad/72/studio-suite.jpg" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
            <button>8.3</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://images.grandsierraresort.com/image/upload/q_auto,f_auto,w_450,c_scale/c_limit,w_1280/v1503696289/hotel/Grand-Studio-Suite-at-The-A-view-of-bedroom-and-lounge-areas_16to9.png" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
            <button>9.5</button>
            <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProperties