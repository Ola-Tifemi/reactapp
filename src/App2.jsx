import Header  from "./playground/Header"
import Content from "./playground/Content"
import Footer from "./playground/Footer"
import Login from "./playground/Login"
import Form from "./playground/Form"

const App2 = () => {
    let currentYear =  2022;
    let isLogin = true;
    let appname = "Blogger";
    let author = "Tifemi";
    let available_titles = ["Wicked","Titanic","Cinderella","Bloodshot","Alone","Beauty and The Beast!!","Kyle XY"]
    function fetchFirstMovie(){
        return available_titles[0];
    }

    if (isLogin){
        return (
            <div className="container">
                {/* children components will be listed here */}
                    {/* <Header xyz={appname} currentYear={currentYear}/>
                    <Content xyz={appname} author={author} titles ={available_titles}
                     firstMovie={fetchFirstMovie} isLogin={isLogin}/> */}
                     <Form/>
                    <Footer xyz={appname} author={author} currentYear={currentYear}/>
            </div>
        )
    }else{
        return(
            <Login/>
        )
    }
}
export default App2