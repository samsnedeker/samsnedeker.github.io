function createLink(url, text) {
    return (
        <a href={url} className={text}>
            {text}
        </a>
    )
}

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('Book submission: ' + this.state.value);
      event.preventDefault();
      this.setState({
          value:''
      });

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            What are you reading right now?
          </label><br/><br/>
          <input type="text" onChange={this.handleChange} value={this.state.value}/>
        </form>
      );
    }
}

function MainContent() {
    return (
        <div className="container">
            <a href="https://www.companioninabox.art/">
                <img src={ ("images/companioninabox.png") } id="profile-image"/>
            </a>
            <h1>Samantha Snedeker</h1>
            <p id="bio">I like reading, writing, and coding.</p>
            <p id="socials"> {createLink("https://www.linkedin.com/in/samanthasnedeker/","LinkedIn")} | {createLink("https://twitter.com/snedsas","Twitter")} | {createLink("https://github.com/samsnedeker","GitHub")} | {createLink("https://medium.com/thoughts-from-an-undergrad/running-hills-90faf0379afa","Medium")} | {createLink("https://www.goodreads.com/user/show/131479645-samantha","GoodReads")} | {createLink("https://dune.xyz/snedsa", "Dune")} </p>
            <NameForm></NameForm>
            {/* <form id="readingrecs">
                <label>What are you reading right now?</label><br></br><br></br>
                <input type="text" id="readingrecs" name="readingrecs"></input><br></br>
            </form> */}
        </div>
    )
}
 
ReactDOM.render(
    <div>
        <MainContent></MainContent>
    </div>,
    document.getElementById("root")
)
