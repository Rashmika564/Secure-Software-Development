import React, { Component } from "react";
import axios from "axios";
import { encryptAndReturn } from "./utils/encryptData";
let CryptoJS = require("crypto-js");


class Message extends Component {
  constructor(props) {

    console.log("Run");
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: '' };
    this.submitFileData = this.submitFileData.bind(this);
    this.submitMessageData = this.submitMessageData.bind(this);
}

  
  async submitFileData(event){
    event.preventDefault();
   
    const cyphertest = encryptAndReturn(event.target.message.value);
    
    const data = {
      message:cyphertest
    }

    console.log(cyphertest)
    // const responseData = await axios.post(`http://localhost:5000/message/save`, data, {
    //   headers: {
    //     'Content-Type':'application/json',
    //     'x-access-token': this.props.token.id_token,
    //     'user_name':'chathura'
    //   }
    // });
    // console.log(responseData);
    // if(responseData.status == 200){
    // console.log("okkkkkkkkk")
    //   // swal("Good job!", "File Uploaded Successfully!", "success");
    // }

  }


  submitMessageData = async(event) => {
    event.preventDefault();
    const ciphertext = encryptAndReturn(event.target.message.value);

   //var ciphertext = CryptoJS.AES.encrypt(JSON.stringify("kkk"), "my-secret-key@123").toString();
    
   console.log(event.target.message.value, "this i vl");

    console.log(ciphertext);

    const data = {
      message:ciphertext
    }

    if((event.target.message.value == null) || (event.target.message.value == "")){
      alert("Please Enter a Message")
    }
   else{
    
    axios.post(`http://localhost:5000/message/save`, data, {
      headers: {
        'Content-Type':'application/json',
        'x-access-token': this.props.token.id_token,
        'user_name':'chathura'
      }
    }).then((result)=> {

      
    })
   // console.log(responseData);
   alert("Successful");
    window.location.reload();
    
    // if(responseData){
    // alert("Successful")
    // console.log("ok")

    // window.location.reload();
    //   // swal("Good job!", "File Uploaded Successfully!", "success");
    // }

   }

    


  }




setEditPopup = (assignment) => {

  console.log(assignment);
  this.setState({editModelShow: true, empass: assignment});

}

handleAssignmentDelete = (assignment) => {
  // console.log("Delete");
  const Assignment = this.state.Assignment.filter(l => l._id !== assignment._id );
  this.setState({Assignment:Assignment});


}



  render(){
   
  return (
    <React.Fragment>
        <div style={{marginTop:"100px"}}>
          <h1 className="mb-5">Save Message</h1>
          <form  onSubmit={this.submitMessageData}>
            <p><label for="w3review">Message:</label></p>
            <textarea id="w3review"  rows="4" cols="50" style={{border:"1px solid black"}} name="message"></textarea>
            <br />
            <input type="submit" value="Submit" style={{marginTop:"40px"}}/>
          </form>
        </div>
        
        
      </React.Fragment>
  );
  }
};

export default Message;