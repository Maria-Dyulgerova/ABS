import { useEffect, useState } from 'react';

import * as companyService from '../../services/companyService';
import CompanyListItem from './CompanyListItem';

export default function CompanytList() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        companyService.getAll()
            .then(
                result => {
                    setCompanies(result);
                    
                })
            .catch(err => {
                console.log(err);
            });
    }, []);
    // console.log(companies);
    return (
        
        <section id="catalog-page">
            <h1>Companies List</h1>
            <div className="allArtists">
                <div className="allArtists-info">
                    <table className="artist-list">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Nationality</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
            {companies.map(company => (
                
                <CompanyListItem 
                    key={company._id}  
                    _id={company._id} 
                    companyName={company.companyName}  
                    nationality={company.nationality} 
                    contact={company.contact} 
                    />
                
            ))}
                        </tbody>
                    </table>
                    {companies.length === 0 && (
                        <h3 className="no-articles">No companies yet</h3>
                    )}
                </div>
            </div>
        </section>
    );
}
