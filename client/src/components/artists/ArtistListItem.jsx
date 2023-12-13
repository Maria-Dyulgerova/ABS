import { Link } from "react-router-dom";

export default function ArtistListItem({
    _id,
    firstName,
    lastName,
    artistName,
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
                    <tr>
                        <td>{_id}</td>
                        <td>{firstName}&nbsp;{lastName}</td>
                        <td><h3>{artistName}</h3></td>
                        <td>{role}</td>
                        <td>{instrument}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td><Link to={`/artists/${_id}`} className="details-button">Details</Link></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
