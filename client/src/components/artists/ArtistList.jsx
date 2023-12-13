import { useEffect, useState } from 'react';

import * as artistService from '../../services/artistService';
import ArtistListItem from './ArtistListItem';

export default function ArtistList() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        artistService.getAll()
            .then(result => setArtists(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Artists</h1>

            {artists.map(artist => (
                <ArtistListItem key={artist._id} {...artist} />
            ))}

            {artists.length === 0 && (
                <h3 className="no-articles">No artists yet</h3>
            )}
        </section>
    );
}
