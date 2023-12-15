import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Path from '../../paths';
import * as artistService from "../../services/artistService";


export default function ArtistEdit() {
    const navigate = useNavigate();
    const { artistId } = useParams();
    const [artist, setArtist] = useState({});

    // in case somebody changes id in the address bar
    useEffect(() => {
        artistService.getOne(artistId)
            .then(result => {
                setArtist(result);
            });
    }, [artistId]);


    const editArtistSubmitHandler = async (e) => {
        e.preventDefault();

        const artistData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(artistData);

        try {
            await artistService.edit(artistId, artistData);

            navigate(Path.ArtistsList);
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setArtist(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editArtistSubmitHandler}>
                <div className="container">
                    <h1>Edit Artist Info</h1>
                    <input type="hidden" id="_id" name="_id" value={artist._id}/>
                    <div className="element-wrapper">
                        <label htmlFor="artistName">Name:</label>
                        <input type="text" id="artistName" name="artistName" value={artist.artistName} onChange={onChange} placeholder="Enter artist name" />

                        <label htmlFor="nickName">Nick Name:</label>
                        <input type="text" id="nickName" name="nickName" value={artist.nickName} onChange={onChange} placeholder="Enter artist nickname" />

                        <label htmlFor="DOB">Date of birth:</label>
                        <input type="text" id="DOB" name="DOB" value={artist.DOB} onChange={onChange} placeholder="" />

                        <label htmlFor="POB">Place of birth:</label>
                        <input type="text" id="POB" name="POB" value={artist.POB} onChange={onChange} placeholder="" />

                        <label htmlFor="gender">Gender:</label>
                        <input type="text" id="gender" name="gender" value={artist.gender} onChange={onChange} placeholder="" />

                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" value={artist.imageUrl} onChange={onChange} placeholder="" />

                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" name="role" value={artist.role} onChange={onChange} placeholder="" />

                        <label htmlFor="instrument">Instrument:</label>
                        <input type="text" id="instrument" name="instrument" value={artist.instrument} onChange={onChange} placeholder="" />

                        <label htmlFor="startedAt">Started At:</label>
                        <input type="text" id="startedAt" name="startedAt" value={artist.startedAt} onChange={onChange} placeholder="" />

                    </div>
                    <div className="element-wrapper"><span>Contact Information: </span>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={artist.contact?.email} onChange={onChange} placeholder="" />

                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" value={artist.contact?.phone} onChange={onChange}  placeholder="" />
                        <div className="element-wrapper"><span>Address: </span>
                            <label htmlFor="country">Country:</label>
                            <input type="text" id="country" name="country" value={artist.contact?.address?.country} onChange={onChange}  placeholder="" />

                            <label htmlFor="postCode">Post Code:</label>
                            <input type="text" id="postCode" name="postCode" value={artist.contact?.address?.postCode} onChange={onChange}  placeholder="" /> 

                            <label htmlFor="city">City:</label>
                            <input type="text" id="city" name="city"  value={artist.contact?.address?.city} onChange={onChange} placeholder="" /> 

                            <label htmlFor="details">Details:</label>
                            <input type="text" id="details" name="details"  value={artist.contact?.address?.details} onChange={onChange} placeholder="" />  

                            
                        </div>
                        

                    </div>
                    <div className="element-wrapper"><span>Passport : </span>

                        <label htmlFor="number">No:</label>
                        <input type="text" id="number" name="number" value={artist.passport?.number} onChange={onChange}  placeholder="" />

                        <label htmlFor="authority">Authority:</label>
                        <input type="text" id="authority" name="authority" value={artist.passport?.authority} onChange={onChange} placeholder="" /> 

                        <label htmlFor="issueDate">Issue Date:</label>
                        <input type="text" id="issueDate" name="issueDate" value={artist.passport?.issueDate} onChange={onChange} placeholder="" /> 

                        <label htmlFor="validityDate">Validity Date:</label>
                        <input type="text" id="validityDate" name="validityDate" value={artist.passport?.validityDate} onChange={onChange} placeholder="" />  
                    </div>
                    <div className="element-wrapper"><span>Documents: </span>
                        <label htmlFor="PDNum">PD No:</label>
                        <input type="text" id="PDNum" name="PDNum" value={artist.documents?.PDNum} onChange={onChange} placeholder="" />

                        <label htmlFor="selfEmplTaxNum">Self Empl Tax No:</label>
                        <input type="text" id="selfEmplTaxNum" name="selfEmplTaxNum" value={artist.documents?.selfEmplTaxNum} onChange={onChange} placeholder="" /> 

                        <label htmlFor="medAttestToDate">Med Attest To Date:</label>
                        <input type="text" id="medAttestToDate" name="medAttestToDate" value={artist.documents?.medAttestToDate} onChange={onChange} placeholder="" /> 

                        <label htmlFor="accidentInsuranceNum">Accident Insurance No:</label>
                        <input type="text" id="accidentInsuranceNum" name="accidentInsuranceNum" value={artist.documents?.accidentInsuranceNum} onChange={onChange} placeholder="" />  

                        
                    </div>

                    <div className="element-wrapper"><span>Next of kin : </span>
                        <label htmlFor="nextToKinName">Name:</label>
                        <input type="text" id="nextToKinName" name="nextToKinName" value={artist.nextOfKin?.nextToKinName} onChange={onChange} placeholder="" />

                        <label htmlFor="nextToKinAddress">Adress: </label>
                        <input type="text" id="nextToKinAddress" name="nextToKinAddress" value={artist.nextOfKin?.nextToKinName} onChange={onChange} placeholder="" /> 

                        <label htmlFor="nextToKinEmail">Email :</label>
                        <input type="text" id="nextToKinEmail" name="nextToKinEmail" value={artist.nextOfKin?.nextToKinName} onChange={onChange} placeholder="" /> 

                        <label htmlFor="nextToKinPhone">Phone: </label>
                        <input type="text" id="nextToKinPhone" name="nextToKinPhone" value={artist.nextOfKin?.nextToKinName} onChange={onChange} placeholder="" />  
                    </div>
                      
                    <input className="btn submit" type="submit" value="Edit Artist Info" />
                </div> 
            </form>
        </section>
    );
}
