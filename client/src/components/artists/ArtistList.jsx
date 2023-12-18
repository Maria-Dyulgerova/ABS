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
            <h1>Artists List</h1>
            <div className="allArtists">
                <div className="allArtists-info">
                    <table className="artist-list">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Nickname</th>
                                <th>Role</th>
                                <th>Instrument</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
            {artists.map(artist => (
                
                <ArtistListItem 
                    key={artist._id}  
                    _id={artist._id} 
                    artistName={artist.artistName}  
                    nickName={artist.nickName} 
                    role={artist.role} 
                    instrument={artist.instrument} 
                    contact={artist.contact} 
                    />
                
            ))}
            
            

            {artists.length === 0 && (
                <h3 className="no-articles">No artists yet</h3>
            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
