// import Search from ".././Search"
import ArtistList from "./ArtistList"

function ArtistListContainer() {
    return (
        <section className="card users-container">
           
            {/* <Search/> */}
            <ArtistList/>
            
            {/* <button className="btn-add btn" onClick={createChildClickHandler}>Add new child</button> */}
        </section>

    )

}
export default ArtistListContainer;