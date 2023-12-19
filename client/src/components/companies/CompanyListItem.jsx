import { Link } from "react-router-dom";

export default function CompanytListItem({
    _id,
    companyName,
    nationality,
    contact
}) {
    // console.log(contact);
    return (
        <tr>
            <td><b>{companyName}</b></td>
            <td>{nationality}</td>
            <td>{contact?.email}</td>
            <td>{contact?.phone}</td>
            <td><Link to={`/companies/${_id}`} className="details-button">Details</Link></td>
        </tr>
   
);

}