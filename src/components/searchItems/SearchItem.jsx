import React from 'react'
import "./searchitem.css"
const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitles">Tower Street Apartment</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free Airport tAXI</span>
            <span className="siSubtitle">Studio Apartment With Air Conditionning</span>
            <span className="siFeatures">Entire Studio .1 bathroom . 21m 1 full bed</span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitile">You can Cancel Later, so Lock in this great price today!</span>
        </div>
        <div className="siDetails">Details</div>
    </div>
  )
}

export default SearchItem
