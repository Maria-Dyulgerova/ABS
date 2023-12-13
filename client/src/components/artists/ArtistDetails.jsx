import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as artistService from '../../services/artistService';
// import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
// import useForm from '../../hooks/useForm';
// import { pathToUrl } from "../../utils/pathUtils";
// import Path from "../../paths";

export default function ArtistDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [artistDetails, setArtistDetails] = useState({});
    const { artistId } = useParams();

    console.log(artistDetails);
    console.log(artistId);
    console.log(location.pathname);

    useEffect(() => {
        artistService.getOne(artistId)
            .then(setArtistDetails);

        
    }, [artistId]);

    
    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${artistDetails.firstName}`);

        if (hasConfirmed) {
            await artistService.remove(artistId);

            navigate('/artists');
        }
    }


    return (
        <section id="artist-details">
            <h1>Artist Details</h1>
            <div className="info-section">
                <div className="artist-header">
                    <img className="artist-img" src={artistDetails.imageUrl} alt={artistDetails.name} />
                    <div>
                        <h1>{artistDetails.name}</h1>
                        <p className="type">
                            
                            <strong>{artistDetails.nickName}</strong>
                        </p>
                        <p className="type">
                            Started at: <strong>{artistDetails.startedAt}</strong>
                        </p>
                    </div>
                    <div>
                        <p className="type">Role: <strong>{artistDetails.role}</strong></p>
                        <p className="type">Instrument: <strong>{artistDetails.instrument}</strong></p>
                    </div>
                    <div>
                    <p className="type">Date Of Birth: <strong>{artistDetails.DOB}</strong></p>
                    <p className="type">Place of Birth: <strong>{artistDetails.birthPlace}</strong></p>
                    <p className="type">Gender: <strong>{artistDetails.gender}</strong></p>
                    </div>
                    {/* <p className="type">{artistDetails.gender}</p>
                    <p className="type">{artistDetails.gender}</p> */}
                    
                </div>
                    <div>
                        <p className="type">Email: <strong>{artistDetails.contact?.email}</strong></p>
                        <p className="type">Phone: <strong>{artistDetails.contact?.phone}</strong></p>
                    </div>
                    <div> 
                        <p className="type">Address: </p><br/>
                        <p className="type">Country: <strong>{artistDetails.contact?.address?.country}</strong></p>
                        <p className="type">City: <strong>{artistDetails.contact?.address?.postCode}&nbsp;{artistDetails.contact?.address?.city}</strong></p>
                        <p className="type">Street: <strong>{artistDetails.contact?.address?.street}</strong></p>
                        <p className="type">Street No: <strong>{artistDetails.contact?.address?.streetNumber}&nbsp;
                            {artistDetails.contact?.address?.more}</strong>
                        </p>
                    </div>
                    <div>
                        <p className="type">Passport: </p><br/>
                        <p className="type">No: <strong>{artistDetails.passport?.number}</strong></p>
                        <p className="type">Authority: <strong>{artistDetails.passport?.authority}</strong></p>
                        <p className="type">Issue Date: <strong>{artistDetails.passport?.issueDate}</strong></p>
                        <p className="type">Validity Date: <strong>{artistDetails.passport?.validityDate}</strong></p>
                    </div>
                    <div>
                        <p className="type">Doduments: </p><br/>
                        <p className="type">PD No: <strong>{artistDetails.documents?.PDNum}</strong></p>
                        <p className="type">Self Empl Tax No: <strong>{artistDetails.documents?.selfEmplTaxNum}</strong></p>
                        <p className="type">Med. Attest To Date: <strong>{artistDetails.documents?.medAttestToDate}</strong></p>
                        <p className="type">Accident Insurance No: <strong>{artistDetails.documents?.accidentInsuranceNum}</strong></p>
                    </div>
                    <div>
                        <p className="type">Next Of Kin: </p><br/>
                        <p className="type">Name: <strong>{artistDetails.nextOfKin?.name}</strong></p>
                        <p className="type">Address: <strong>{artistDetails.nextOfKin?.address}</strong></p>
                        <p className="type">Email: <strong>{artistDetails.nextOfKin?.email}</strong></p>
                        <p className="type">Phone: <strong>{artistDetails.nextOfKin?.phone}</strong></p>
                    </div>
                    
                    
                {/* <p className="text">{artistDetails.role}</p> */}

                
            </div>

            
        </section>
    );
}
