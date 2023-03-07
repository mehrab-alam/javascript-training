
import "./PricingDetail.css"
const PricingDetail = ({ header, price }) => (
    <div className="pricing-detail price-basic">
        <h2>{header}</h2>
        <div className="price">{price} <span>&nbsp; / month</span></div>
        <p>The perfect way to get started and get used to  <br /> our tools</p>
        <hr />
        <div className="features"><span><img src="" alt="" /></span> All features in standard</div>
        <div className="features"><span><img src="" alt="" /></span> Over 600 components</div>
        <div className="features"><span><img src="" alt="" /></span> Build tools and examples</div>
        <button>Get Started</button>
    </div>

)

export default PricingDetail;

