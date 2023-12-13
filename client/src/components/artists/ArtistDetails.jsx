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

        // commentService.getAll(artistId)
        //     .then((result) => {
        //         dispatch({
        //             type: 'GET_ALL_COMMENTS',
        //             payload: result,
        //         });
        //     });
    }, [artistId]);

    // const addCommentHandler = async (values) => {
    //     const newComment = await commentService.create(
    //         artistId,
    //         values.comment
    //     );

    //     newComment.owner = { email };

    //     dispatch({
    //         type: 'ADD_COMMENT',
    //         payload: newComment
    //     })
    // }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${artistDetails.firstName}`);

        if (hasConfirmed) {
            await artistService.remove(artistId);

            navigate('/artists');
        }
    }

    // const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    //     comment: '',
    // });

    return (
        <section id="artist-details">
            <h1>Artist Details</h1>
            <div className="info-section">
                <div className="artist-header">
                    <img className="artist-img" src={artistDetails.imageUrl} alt={artistDetails.artistName} />
                    <h1>{artistDetails.artistName}</h1>
                    <span className="levels">MaxLevel: {artistDetails.artistName}</span>
                    <p className="type">{artistDetails.artistName}</p>
                </div>

                <p className="text">{artistDetails.role}</p>

                {/* <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div> */}

                {/* {userId === artistDetails._ownerId && ( */}
                    {/* <div className="buttons">
                        <Link to={pathToUrl(Path.artistEdit, { artistId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div> */}
                {/* )} */}
            </div>

            
        </section>
    );
}
