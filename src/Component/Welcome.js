import React,{useContext} from 'react';
import { UserContext } from "../UserContext";


// const Welcome=()=>{

export function Welcome(){
    // const {myname,setMyname}=useContext(UserContext);
    const user = useContext(UserContext);
    // alert('My name from welcome : '+user.name);

return (
                <div className="ninja">
                    <h1>Welcome  {user.name}</h1>                    
                </div>
            )
}
export default Welcome;












// class Welcome extends Component{
// constructor (props){
//     super(props);

// }
// render(){
//             return (
//                 <div className="ninja">
//                     <h1>Welcome  {this.name}</h1>
                    
//                 </div>
//             )
        
//         }
// }

// export default Welcome;
