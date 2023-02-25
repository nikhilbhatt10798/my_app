import React from "react";
// example of functional component
// function student(){
//     return <h1>hello App</h1>;
// }
const student = (props)=>{
    return <h1>hello {props.name}</h1>;
}
// example of class component
// class student extends Component{
//     render (){
//         return <h1>hello {this.props.name}</h1>;
//     }
// }

export default student;