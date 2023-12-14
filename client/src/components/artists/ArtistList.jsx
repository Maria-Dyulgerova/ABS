import { useEffect, useState } from 'react';

import * as artistService from '../../services/artistService';
import ArtistListItem from './ArtistListItem';

export default function ArtistList() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        artistService.getAll()
            .then(
                result => {
                    setArtists(result);
                    
                })
            .catch(err => {
                console.log(err);
            });
    }, []);
    // console.log(artists);
    return (
        
        <section id="catalog-page">
            <h1>All Artists</h1>

            {artists.map(artist => (
                
                <ArtistListItem 
                    key={artist._id} 
                    _id={artist._id}
                    name={artist.name} 
                    nickName={artist.nickName}
                    role={artist.role}
                    instrument={artist.instrument}
                    contact={artist.contact}
                    />
                
            ))}
            
            

            {artists.length === 0 && (
                <h3 className="no-articles">No artists yet</h3>
            )}
        </section>
    );
}
