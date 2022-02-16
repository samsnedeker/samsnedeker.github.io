function MainContent() {
    return (
        <div>
            <h1 className="main content">Samantha Snedeker</h1>
            <body className="bio">I like to write. I like to code. I love reading and I love learning.</body> 
        </div>

    )
}
 
ReactDOM.render(
    <div>
        <MainContent></MainContent>
    </div>,
    document.getElementById("root")
)
