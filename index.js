function createLink(url, text) {
    return (
        <a href={url} className={text}>
            {text}
        </a>
    )
}

function MainContent() {
    return (
        <div className="container">
            <a href="https://www.companioninabox.art/">
                <img src={ ("images/companioninabox.png") } id="profile-image"/>
            </a>
            <h1>Samantha Snedeker</h1>
            <p id="bio">I like reading, writing, and coding.</p> 
            <p id="socials"> {createLink("https://www.linkedin.com/in/samanthasnedeker/","LinkedIn")} | {createLink("https://twitter.com/snedsas","Twitter")} | {createLink("https://github.com/samsnedeker","GitHub")} | {createLink("https://medium.com/thoughts-from-an-undergrad/running-hills-90faf0379afa","Medium")} | {createLink("https://www.goodreads.com/user/show/131479645-samantha","GoodReads")} </p>
            <form className="readingrecs">
                <label for="fname">What are you reading right now?</label><br></br>
                <input type="text" id="fname" name="fname"></input><br></br>
            </form>
        </div>
    )
}
 
ReactDOM.render(
    <div>
        <MainContent></MainContent>
    </div>,
    document.getElementById("root")
)
