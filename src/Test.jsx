import HelloWorld from "./components/HelloWorld"
import pic from "./assets/contact-bg.jpg"

function Test(){
    const name = "Paul"
    return<>
        <img src="/post-bg.jpg" alt=""  style={{width:'350px',border:'2px dotted red',padding:'30px'}}/>
        <img src={pic} alt="" style={{width:'350px',border:'2px dotted red',padding:'30px'}} />
        <h1 className="text-primary">My Test Components</h1>
        <HelloWorld />
        <p>This is my Component {name.toUpperCase()}</p>
        <button className="btn btn-danger" onClick={()=>{alert('Hello, You clicked Me!!')}}>Get Started</button>
    </>

}

export default Test
// This is a test component that displays a title, a paragraph, and a button.
