import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as companyService from "../../services/companyService";
import * as shipService from "../../services/shipService"
// import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
// import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function CompanyDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [companyDetails, setCompanyDetails] = useState({});
    const [companyShips, setCompanyShips] = useState({});
    const { companyId } = useParams();

    useEffect(() => {
        companyService.getOne(companyId)
            .then(setCompanyDetails);

        shipService.getAllFromCompany(companyId)
            .then(result => {
                setCompanyShips(result);
            });
    }, [companyId]);

    // const addCommentHandler = async (values) => {
    //     const newComment = await commentService.create(
    //         gameId,
    //         values.comment
    //     );

    //     newComment.owner = { email };

    //     dispatch({
    //         type: 'ADD_COMMENT',
    //         payload: newComment
    //     })
    // }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${companyDetails.companyName}`);

        if (hasConfirmed) {
            await companyService.remove(companyId);

            navigate(Path.CompanyList);
        }
    }

    return (
        <section id="artist-details">
            <h1>Company Details</h1>
            <div className="info-section">
                <div className="artist-header">
                    <div>
                        
                        <h1>{companyDetails.companyName}</h1>
                        <p className="type">Nationality: {companyDetails.nationality}</p><br/>
                    </div>
                </div>
               
                <div className="element-wrapper"> 
                    <p className="type">Contact: </p><br/>
                    <p className="type">Email: <strong>{companyDetails.contact?.email}</strong></p>
                    <p className="type">Phone: <strong>{companyDetails.contact?.phone}</strong></p>
                <br/>
                    <p className="type">Address: </p><br/>
                    <p className="type">Country: <strong>{companyDetails.contact?.address?.country}</strong></p>
                    <p className="type">City: <strong>{companyDetails.contact?.address?.postCode}&nbsp;{companyDetails.contact?.address?.city}</strong></p>
                    <p className="type">Details: <strong>{companyDetails.contact?.address?.details}</strong></p>
                    
                </div>
                
                {/* <h2>Ships:</h2>
                
                    <ul>
                    {companyShips.map(({ _id, shipName, companyId: { companyId } }) => (
                            <li key={_id} className="ships">
                                <p>{shipName}</p>
                            </li>
                        ))}
                    </ul>     */}
                    
                <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                
            </div>
        </section>
    );
}
