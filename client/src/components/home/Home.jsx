
export default function Home({
    _id,
    accessToken,
    email,
}) {
   

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Greeting Message Here</h2>
                <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
</h4>
            </div>
            <img src="./images/hero.png" alt="logo" />

            <div id="home-page">
                <h1>Home Page Content</h1>

               

                <p>{email}</p>
            </div>
        </section>
    );
}

