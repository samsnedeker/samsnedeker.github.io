function socialMediaLink(url, text) {
    return (
        <a href={url} className={text}>
            {text}
        </a>
    )
}
function MainContent() {
    return (
        <div className="main content">
            <h1>Samantha Snedeker</h1>
            <body className="bio">I like to write. I like to code. I love reading and I love learning.</body> 
            <ul>
                <li>{socialMediaLink("https://www.linkedin.com/in/samanthasnedeker/","LinkedIn")}</li>
                <li>{socialMediaLink("https://twitter.com/snedsas","Twitter")}</li>
            </ul>
        </div>
    )
}
 
ReactDOM.render(
    <div>
        <MainContent></MainContent>
        <createLink></createLink>
    </div>,
    document.getElementById("root")
)
