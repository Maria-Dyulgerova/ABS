import { Link } from "react-router-dom";

export default function ArtistListItem({
    _id,
    artistName,
    nickName,
    role,
    instrument,
    contact
}) {
    return (
                        <tr>
                            <td><b>{artistName}</b></td>
                            <td>{nickName}</td>
                            <td>{role}</td>
                            <td>{instrument}</td>
                            <td>{contact?.email}</td>
                            <td>{contact?.phone}</td>
                            <td><Link to={`/artists/${_id}`} className="details-button">Details</Link></td>
                        </tr>
    );
}
