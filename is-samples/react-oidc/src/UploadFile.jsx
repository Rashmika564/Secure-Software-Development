import React, { Component } from "react";
import axios from 'axios'
// import swal from 'sweetalert';

class UploadFile extends Component {
  constructor(props) {

    console.log("Run");
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: '' };
    this.submitFileData = this.submitFileData.bind(this);
}

  componentDidMount() {
   
  }

  async submitFileData(event){


   
    var that = this;
    event.preventDefault();
    console.log("test test",that.props.token)
    const data = new FormData();
    const imagedata = event.target.uploadFile.files[0];
    data.append('file', imagedata);
    console.log(data);
    console.log(imagedata);


    if(imagedata){
      const responseData = await axios.post(`http://localhost:5000/file/upload`, data, {
        headers: {
          'Content-Type':'multipart/form-data',
          'x-access-token': that.props.token.id_token,
          'user_name':'chathura'
        }
      });
      console.log(responseData);
      if(responseData.status == 200){
  
        console.log("file Uploaded")
        // swal("Good job!", "File Uploaded Successfully!", "success");
      }
    }
    else{
      alert("Enter a File")
    }

    

  }


  render() {
    return (
      <React.Fragment>
        <div className="row" style={{marginTop:"100px"}}>
          <form onSubmit={this.submitFileData}>
            <h1>Upload File</h1>
            <input type="file" name="uploadFile"/><br />
            <button type="submit" style={{marginTop:"20px"}} >Upload</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
};

export default UploadFile;
