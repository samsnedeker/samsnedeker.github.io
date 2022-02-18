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
            <p className="bio">I like reading, writing, and coding.</p> 
        </div>
    )
}

function Socials() {
    return (
        <div className="container">
            <li>{createLink("https://www.linkedin.com/in/samanthasnedeker/","LinkedIn")}</li>
            <li>{createLink("https://twitter.com/snedsas","Twitter")}</li>
            <li>{createLink("https://github.com/samsnedeker","GitHub")}</li>
            <li>{createLink("https://medium.com/thoughts-from-an-undergrad/running-hills-90faf0379afa","Medium")}</li>
        </div>
    )
}
 
ReactDOM.render(
    <div>
        <MainContent></MainContent>
        <Socials></Socials>
    </div>,
    document.getElementById("root")
)
