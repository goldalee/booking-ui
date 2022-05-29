import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://media.istockphoto.com/photos/singapore-skyline-at-marina-bay-at-twilight-with-glowing-sunset-the-picture-id1176969551?k=20&m=1176969551&s=612x612&w=0&h=15amOa-t2T-loGyxcMBK2e0mHrHmpD1NFx9f1KQ6uXU=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>  
        </div>
        <div className="featuredItem">
            <img src="https://media.istockphoto.com/photos/singapore-glowing-at-night-picture-id590050726?k=20&m=590050726&s=612x612&w=0&h=XoGFM6z2bGu9qNk6HYCQbT4UO1SpeiZP-SfOGgIzdl8=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>532 properties</h2>
            </div>  
        </div>
        <div className="featuredItem">
            <img src="http://cdn.cnn.com/cnnnext/dam/assets/190910120101-04-shopping-cities-photos.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
            </div>  
        </div>

    </div>
  )
}

export default Featured