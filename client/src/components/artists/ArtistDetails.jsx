import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as artistService from '../../services/artistService';
// import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
// import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

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
        const hasConfirmed = confirm(`Are you sure you want to delete ${artistDetails._id}`);

        if (hasConfirmed) {
            await artistService.remove(artistId);

            navigate(Path.ArtistsList);
        }
    }


    return (
        <section id="artist-details">
            <h1>Artist Details</h1>
            <div className="info-section">
                <div className="artist-header">
                    <div>
                        <img className="artist-img" src={artistDetails.imageUrl} alt={artistDetails.name} />
                    
                        <h1>{artistDetails.artistName}</h1>
                        <p className="type">
                            
                            <strong>{artistDetails.nickName}</strong>
                        </p>
                        <br/>
                        
                    
                        <p className="type">Role: <strong>{artistDetails.role}</strong></p>
                        <p className="type">Instrument: <strong>{artistDetails.instrument}</strong></p>
                        <br/>
                        <p className="type">Date Of Birth: <strong>{artistDetails.DOB}</strong></p>
                        <p className="type">Place of Birth: <strong>{artistDetails.POB}</strong></p>
                        <p className="type">Gender: <strong>{artistDetails.gender}</strong></p>
                        <p className="type">
                            Started at: <strong>{artistDetails.startedAt}</strong>
                        </p>
                    </div>
                </div>
               
                <div>
                    <p className="type">Contact: </p><br/>
                    <p className="type">Email: <strong>{artistDetails.contact?.email}</strong></p>
                    <p className="type">Phone: <strong>{artistDetails.contact?.phone}</strong></p>
                </div>
               
                <div className="element-wrapper"> 
                    <p className="type">Address: </p><br/>
                    <p className="type">Country: <strong>{artistDetails.contact?.address?.country}</strong></p>
                    <p className="type">City: <strong>{artistDetails.contact?.address?.postCode}&nbsp;{artistDetails.contact?.address?.city}</strong></p>
                    <p className="type">Details: <strong>{artistDetails.contact?.address?.details}</strong></p>
                    
                </div>
                
                <div className="element-wrapper">
                    <p className="type">Passport: </p><br/>
                    <p className="type">No: <strong>{artistDetails.passport?.number}</strong></p>
                    <p className="type">Authority: <strong>{artistDetails.passport?.authority}</strong></p>
                    <p className="type">Issue Date: <strong>{artistDetails.passport?.issueDate}</strong></p>
                    <p className="type">Validity Date: <strong>{artistDetails.passport?.validityDate}</strong></p>
                </div>
                <div className="element-wrapper">
                    <p className="type">Doduments: </p><br/>
                    <p className="type">PD No: <strong>{artistDetails.documents?.PDNum}</strong></p>
                    <p className="type">Self Empl Tax No: <strong>{artistDetails.documents?.selfEmplTaxNum}</strong></p>
                    <p className="type">Med. Attest To Date: <strong>{artistDetails.documents?.medAttestToDate}</strong></p>
                    <p className="type">Accident Insurance No: <strong>{artistDetails.documents?.accidentInsuranceNum}</strong></p>
                </div>
                <div className="element-wrapper">
                    <p className="type">Next Of Kin: </p><br/>
                    <p className="type">Name: <strong>{artistDetails.nextOfKin?.nextToKinName}</strong></p>
                    <p className="type">Address: <strong>{artistDetails.nextOfKin?.nextToKinAddress}</strong></p>
                    <p className="type">Email: <strong>{artistDetails.nextOfKin?.nextToKinEmail}</strong></p>
                    <p className="type">Phone: <strong>{artistDetails.nextOfKin?.nextToKinPhone}</strong></p>
                </div>

                <Link to={pathToUrl(Path.ArtistEdit, { artistId })} className="button">Edit</Link>
                        
                <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                {/* <Link to={`/artists/${_id}`} className="edit-button">Edit</Link> */}
            </div>
        </section>
    );
}
