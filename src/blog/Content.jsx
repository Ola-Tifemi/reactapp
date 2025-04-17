import Contact from "./Contact"
import { useEffect } from "react"
import { useState } from "react"

let Content =({total}) =>{
    //to demonstrate that whenver local total which is a state variable is changed, the useEffect will run
    let [localtotal ,setLocaltotal] = useState(total) //change this to 10 to see the effect in layout component
    let [counter, setCounter] = useState(0) // change the value of counter whenever you click the button
    let [allposts, setAllposts] = useState([]) // to store all posts from the API
    let [errormsg,setErrormsg] = useState(null) // to store error message from the API
    let [loader, setLoader] = useState(false) 
    let handleClick = () => {
        setCounter(counter + 1)
    }    
    useEffect(()=>{
        // console.log('This will run once when the component mounts  ' + total + counter);
        setLoader(true)
        fetchPosts()
    },[counter,errormsg])
    function fetchPosts(){
        //connect to backend API here
        fetch("https://dummyjson.com/posts" )
        .then(response => {return response.json()}) //reponse type?
        .then(data => { 
            setAllposts(data.posts)
            console.log(data)
            setLoader(false) }) 
            //{id:0, title: "", body: ""}
        .catch((error) => {
            setErrormsg(error.message)
            setLoader(false)
            console.log(error);
        })
        .finally(()=>{
            setLoader(false)
        });
    }

    let external = allposts.map(function(value,key) {
        return <div key={key}>
                    <div className="post-preview">
                        <a href="post.html">
                        <h2 className="post-title">
                            {value.title}
                        </h2>
                        <h3 className="post-subtitle">
                            {value.body}
                        </h3>
                        </a>
                        <p className="post-meta">
                        Posted by
                        <a href="#!">Start Bootstrap</a>
                        on September 24, 2023
                        </p>
                    </div>
                    {/* Divider*/}
                    <hr className="my-4" />
                    {/* Pager*/}
                 </div>
                
    })
    return(
        <>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-12">
                    <div className="text-center">
                        <button className="btn btn-primary">Add</button>
                        <button className="btn btn-outline-danger" onClick={handleClick}>{counter} Guests online</button>
                    </div>
                        {loader && <div className="d-flex justify-content-center">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        </div>} 
                        {errormsg && <div className="alert alert-danger noround">{errormsg}</div>}

                    {external}
                    {/* Post preview*/}
                    <div className="post-preview">
                        <a href="post.html">
                        <h2 className="post-title">
                            Man must explore, and this is exploration at its greatest
                        </h2>
                        <h3 className="post-subtitle">
                            Problems look mighty small from 150 miles up
                        </h3>
                        </a>
                        <p className="post-meta">
                        Posted by
                        <a href="#!">Start Bootstrap</a>
                        on September 24, 2023
                        </p>
                    </div>
                    {/* Divider*/}
                    <hr className="my-4" />
                    {/* Pager*/}
                    <div className="d-flex justify-content-end mb-4">
                        <a className="btn btn-danger text-uppercase" href="#!">
                        Older Posts →
                        </a>
                    </div>
                    </div>
            </div>
  <Contact/>
</div>

        </>
    )
}
export default Content