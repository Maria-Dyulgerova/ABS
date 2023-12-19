import { useEffect, useState } from 'react';

import * as shipService from '../../services/shipService';
import * as companyService from "../../services/companyService"

import ShipListItem from './ShipListItem';

export default function ShipList() {
    const [ships, setShips] = useState([]);
    useEffect(() => {
        shipService.getAll()
            .then(
                result => {
                    setShips(result);
                    
                })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
    // const getCompName = async (id) => {
    //     const a = await companyService.getCompanyName(id);
    //     return a;
    
    // } 
    // function getCompanyName(compId){
    //     return getCompName(compId);
    // }
    // ships.map(ship => ({ ...ship, companyName: getCompName(ship.companyId) }))
    // console.log("ships:");
    // console.log(ships);
    return (
        
        <section id="catalog-page">
            <h1>Ship List</h1>
            <div className="allArtists">
                <div className="allArtists-info">
                    <table className="artist-list">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Signature</th>
                                <th>Embark in</th>
                                <th>Disembark in</th>
                                <th>Company</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
            {ships.map(ship => (
                <ShipListItem 
                    key={ship._id}  
                    _id={ship._id} 
                    shipName={ship.shipName}  
                    signature={ship.signature} 
                    embarkIn={ship.embarkIn} 
                    disembarkIn={ship.disembarkIn} 
                    companyId={ship.companyName} 
                />
                
            ))}
            
                        </tbody>
                    </table>
                    {ships.length === 0 && (
                        <h3 className="no-articles">No ships yet</h3>
                    )}
                </div>
            </div>
        </section>
    );
}
