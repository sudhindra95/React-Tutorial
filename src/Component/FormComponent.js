import React, { useState, Component, useContext } from 'react';
import './FormComponent.css'
import { Redirect, Route, withRouter } from 'react-router-dom';

import {useRoutes, useRedirect,navigate} from 'hookrouter';

import {UserContext} from "../UserContext";


const FormComponent=()=>{

    // const [name, setName] = useState('');
    // const [address, setAddress] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');

    const user=useContext(UserContext);
    
    
    let myMethod=(e)=>{        
        
        // setName(e.target[0].value);        
        user.setName(e.target[0].value);
        // navigate('/welcome');
        

        // setAddress(e.target[1].value);
        // setPhoneNumber(e.target[2].value);
                                    
    }

    // let nav=()=>{
    //     navigate('/welcome');
    // }

    let my_style = {
        height: '500px',
        margin: '100px',
        marginLeft: '300px',
        width: '500px',
        background: 'aqua'
    }

   if(user.name!==''){
    // user.setName();
    alert('Inside if: '+user.name);
    return <Redirect to='/welcome' />
   }

    return (
        <div className="form_body">
            <form onSubmit={myMethod} style={my_style}>
                <label>Name:</label><input type="text" id="Name" />
                <br /><br />
                <label>Address:</label><input type="text" id="Address" />
                <br /><br />
                <label>Phone Number:</label><input type="text" id="Phone_Number" />
                <br /><br />
                <button type="submit" className="mybutton">Submit</button>
            </form>
        </div>

    );
}


export default FormComponent;


// class  FormComponent extends Component{

//     state={ 
//         // Name:null,
//         // Address:null,
//         // Phone_Number:null
//         data:[]
//     }


//     my_style = {
//         height: '500px',
//         margin: '100px',
//         marginLeft: '300px',
//         width: '500px',
//         background: 'aqua'
//     }

//     myMethod=(event)=>{
//         //e.preventDefault();
//         const my_list=[]
//         const e=event.nativeEvent;

//         const name=e.target[0].value;
//         my_list.push(name)
//         const address=e.target[1].value;
//         my_list.push(address)
//         const phone_number=e.target[2].value;
//         my_list.push(phone_number)
//         //alert('My list : '+my_list)
//         this.setState({data:my_list})


//         //this.props.history.push('/welcome');
//         // this.props.push(this.state.data)




//     }
//     render(){



//         if(this.state.data.length>0){
//             // alert("Data here : "+this.state.data)
//             return (<Redirect to={{pathname: "/welcome",state: { mydata: this.state.data } } }/>)
//             //return ( <Redirect to="/welcome"  mydata={this.state.data} />)
//         }else{
//             return (

//         <div className="form_body">
//             <form onSubmit= {this.myMethod.bind(this)} style={this.my_style}>
//                 <label>Name:</label><input type="text" id="Name" />
//                 <br/><br/>
//                 <label>Address:</label><input type="text"  id="Address"/>
//                 <br/><br/>
//                 <label>Phone Number:</label><input type="text" id="Phone_Number"/>
//                 <br/><br/>
//                 <button type="submit" className="mybutton">Submit</button>
//             </form>
//         </div>

//     )
//             }
//     }
// }
// export default FormComponent;
// // export default withRouter(FormComponent);