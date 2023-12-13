import { Link } from "react-router-dom";

export default function ArtistListItem({
    _id,
    firstName,
    lastName,
    artistName,
    // imageUrl,
}) {
    return (
        <div className="allArtists">
            <div className="allArtists-info">
                <div>{_id}</div>
                <div>{artistName}</div>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <Link to={`/artists/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
