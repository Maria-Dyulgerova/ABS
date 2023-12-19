import { Link } from "react-router-dom";
// import * as companyService from "../../services/companyService"

export default function ShipListItem({
    _id,
    shipName,  
    signature, 
    embarkIn, 
    disembarkIn,
    companyId
}) {
    
    
    return (
        <tr>
            <td><b>{shipName}</b></td>
            <td>{signature}</td>
            <td>{embarkIn}</td>
            <td>{disembarkIn}</td>
            <td>{companyId}</td>
            <td><Link to={`/ships/${_id}`} className="details-button">Details</Link></td>
        </tr>
   
);

}