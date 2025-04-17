import { useState } from "react";
import Swal from 'sweetalert2'
let Contact = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [feedback, setFeedback] = useState("")
    const [errormsg, setErrormsg] = useState(null)

    let handleSubmit = (event)=>{
        event.preventDefault()
        
        if(title === "" || content === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
            })
        }else{
            //connect to backend API here
            const data = {title: title, body: content, userId: 1}
            // const data = JSON.stringify({title: title, body: content, userId: 1})
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
            .then(response => {return response.json()}) //reponse type?
            .then(data => {
                console.log("Success:", data);
               setFeedback(`Your message ${data.title} has been sent successfully!`)
               setErrormsg(null)
            })
            .catch((error) => {
                console.error("Error:", error);
                setErrormsg("An error occurred while sending your message. Please try again later.")
                setFeedback(null)
                setTitle("")
                setContent("")
            });
           
            // console.log(title, content)
        }
        
    }
    return(
        <>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Contact Us !</h2>
                    {feedback && <div className="alert alert-success noround">{feedback}</div>}  
                    {errormsg && <div className="alert alert-danger noround">{errormsg}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="">Title</label>
                            <input type="text" className="form-control noround border-dark" name="title" value={title} 
                            onChange={(event)=>{setTitle(event.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Content</label>
                            <input type="text" className="form-control noround border-dark" name="content" value={content} 
                            onChange={(event)=>{setContent(event.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-outline-danger col-12 noround ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact;