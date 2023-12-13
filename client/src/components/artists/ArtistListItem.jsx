import { Link } from "react-router-dom";

export default function ArtistListItem({
    _id,
    name,
    nickName,
    instrument,
    email,
    phone,
    role,

    // imageUrl,
}) {
    return (
        <div className="allArtists">
            <div className="allArtists-info">
                <table className="artist-list-item">
                    <tbody>
                        <tr>
                            <td>{_id}</td>
                            <td><h3>{name}</h3>{nickName}</td>
                            <td>{role}</td>
                            <td>{instrument}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td><Link to={`/artists/${_id}`} className="details-button">Details</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
