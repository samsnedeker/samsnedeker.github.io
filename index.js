function MainContent() {
    return (
        <div className="main content">
            <h1>Samantha Snedeker</h1>
            <body className="bio">I like to write. I like to code. I love reading and I love learning.</body> 
            <body>
                <a href="https://www.linkedin.com/in/samanthasnedeker/"
                    className="linkedin">      
                    LinkedIn   
                </a>
            </body>
        </div>

    )
}

function createLink() {
    var a = document.createElement('a');
    a.setAttribute('href', 'https://www.linkedin.com/in/samanthasnedeker/');
    a.innerHTML = 'LinkedIn';
    return (
        <div>
            <body>hi</body>
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
