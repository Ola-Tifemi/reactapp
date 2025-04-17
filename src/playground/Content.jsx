import Dashboard from "./Dashboard";
import Login from "./Login";


const Content = (prop) => {
   let result =  prop.firstMovie(); //picking up function as a prop

    return (
        <div className="">
            {/* if isLogin is true: Show dashboard component else Login component */}
            {
                prop.isLogin == true ? <Dashboard/> : <Login/>
            }

            <h2>The name of the App we are building is {prop.xyz}</h2>
            <h4>The name of the Author is {prop.author}</h4>
           <ul className="list-group">
                
                {
                    prop.titles.map((title,index)=> {
                        return (
                            <li className="list-group-item" key={index}>
                                {title}
                            </li>
                        )
                    })
                }
           </ul>
           <h5>The First Movie On my List is "{result}"</h5>
        </div>
    )
}
export default Content