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
