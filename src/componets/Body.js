
import { BODY_URL } from "../utils/url";


// const RestaurantCart = ()=>{
//     return (
//         <div>

//         </div>
//     )
// }

const Body = (props) => {
    console.log(props.restObj1.info);

    const { cuisines, sla, cloudinaryImageId, avgRating,  name } = props.restObj1.info;
        console.log(cloudinaryImageId);

    // const [serverUrl, setServerUrl] = useState('https://localhost:1234');
   


    return (
        <div className="rest-body">
            <div className="resto-container">
                <div className="resto-container">
                    <img src= {BODY_URL + cloudinaryImageId} alt="Restaurant" />
                </div>
                <h1 className = "resto-cuisines"> { name }</h1>
                <h1 className="resto-cuisines">{ cuisines.join(', ') }</h1>
                <h1 className="resto-cuisines">{ avgRating }</h1>
                <h1 className="resto-cuisines"> { sla.deliveryTime } Minute </h1>
            </div>
        </div>
    );
};

export default Body;