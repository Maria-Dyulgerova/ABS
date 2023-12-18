import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect  } from 'react';


import Path from '../../paths';

import * as artistService from "../../services/artistService";
import styles from './ArtistCreateEdit.module.css';


export default function ArtistCreate() {
    const navigate = useNavigate();

    // const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});
    const artistNameInputRef = useRef();
    
    useEffect(() => {
        artistNameInputRef.current.focus();
    }, []);
    
    const createArtistSubmitHandler = async (e) => {
        e.preventDefault();

        const artistData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await artistService.create(artistData);

            navigate(Path.ArtistsList);
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }
    const numberValidator = (e) => {
        const inputName = e.currentTarget.name;
        if (isNaN(Number(e.target.value))) {
            
            setErrors(state => ({
                        ...state,
                        number :   `${inputName} should be a number!`,
                    }));
        } else {
                if (errors.number) {
                    setErrors(state => ({ ...state, number: '' }));
                }
            }
        console.log(errors);

        // if (formValues.age < 0 || formValues.age > 120) {
        //     setErrors(state => ({
        //         ...state,
        //         age: 'Age should be between 0 and 120',
        //     }));
        // } else {
        //     if (errors.age) {
        //         setErrors(state => ({ ...state, age: '' }));
        //     }
        // }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createArtistSubmitHandler}>
                <div className="container">
                    <h1>Register New Artist</h1>
                    <div className="element-wrapper">
                        <label htmlFor="artistName">Name:</label>
                        <input type="text" id="artistName" name="artistName" placeholder="Enter artist's full name" ref={artistNameInputRef}/>

                        <label htmlFor="nickName">Nick Name:</label>
                        <input type="text" id="nickName" name="nickName" placeholder="Enter artist nickname" />

                        <label htmlFor="DOB">Date of birth:</label>
                        <input type="text" id="DOB" name="DOB" placeholder="" />

                        <label htmlFor="POB">Place of birth:</label>
                        <input type="text" id="POB" name="POB" placeholder="" />

                        <label htmlFor="gender">Gender:</label>
                        <input type="text" id="gender" name="gender" placeholder="" />

                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="" />

                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" name="role" placeholder="" />

                        <label htmlFor="instrument">Instrument:</label>
                        <input type="text" id="instrument" name="instrument" placeholder="" />

                        <label htmlFor="startedAt">Started At:</label>
                        <input type="text" id="startedAt" name="startedAt" placeholder="" />

                    </div>
                    <div className="element-wrapper"><span>Contact Information: </span>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="" />

                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" placeholder="" />
                        <div className="element-wrapper"><span>Address: </span>
                            <label htmlFor="country">Country:</label>
                            <input type="text" id="country" name="country" placeholder="" />

                            <label htmlFor="postCode">Post Code:</label>
                            <input 
                                type="text" 
                                id="postCode" 
                                name="postCode" 
                                placeholder="" 
                                onBlur={numberValidator}
                                className={errors.number && styles.inputError}
                            /> 
                            {errors.number && (
                        <p className={styles.errorMessage}>{errors.number}</p>
                    )}

                            <label htmlFor="city">City:</label>
                            <input type="text" id="city" name="city" placeholder="" /> 

                            <label htmlFor="details">Details:</label>
                            <input type="text" id="details" name="details" placeholder="" />  

                            
                        </div>
                        

                    </div>
                    <div className="element-wrapper"><span>Passport : </span>

                        <label htmlFor="number">No:</label>
                        <input type="text" id="number" name="number" placeholder="" />

                        <label htmlFor="authority">Authority:</label>
                        <input type="text" id="authority" name="authority" placeholder="" /> 

                        <label htmlFor="issueDate">Issue Date:</label>
                        <input type="text" id="issueDate" name="issueDate" placeholder="" /> 

                        <label htmlFor="validityDate">Validity Date:</label>
                        <input type="text" id="validityDate" name="validityDate" placeholder="" />  
                    </div>
                    <div className="element-wrapper"><span>Documents: </span>
                        <label htmlFor="PDNum">PD No:</label>
                        <input type="text" id="PDNum" name="PDNum" placeholder="" />

                        <label htmlFor="selfEmplTaxNum">Self Empl Tax No:</label>
                        <input type="text" id="selfEmplTaxNum" name="selfEmplTaxNum" placeholder="" /> 

                        <label htmlFor="medAttestToDate">Med Attest To Date:</label>
                        <input type="text" id="medAttestToDate" name="medAttestToDate" placeholder="" /> 

                        <label htmlFor="accidentInsuranceNum">Accident Insurance No:</label>
                        <input type="text" id="accidentInsuranceNum" name="accidentInsuranceNum" placeholder="" />  

                        
                    </div>

                    <div className="element-wrapper"><span>Next of kin : </span>
                        <label htmlFor="nextToKinName">Name:</label>
                        <input type="text" id="nextToKinName" name="nextToKinName" placeholder="" />

                        <label htmlFor="nextToKinAddress">Adress: </label>
                        <input type="text" id="nextToKinAddress" name="nextToKinAddress" placeholder="" /> 

                        <label htmlFor="nextToKinEmail">Email :</label>
                        <input type="email" id="nextToKinEmail" name="nextToKinEmail" placeholder="" /> 

                        <label htmlFor="nextToKinPhone">Phone: </label>
                        <input type="text" id="nextToKinPhone" name="nextToKinPhone" placeholder="" />  
                    </div>
                      
                    <input className="btn submit" type="submit" value="Register Artist" />
                </div> 
            </form>
        </section>
    );
}
