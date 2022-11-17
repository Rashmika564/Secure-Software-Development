import React, { Component } from 'react';
import axios from "axios";

class ViewMessages extends Component {



    state = {

        messages: []
    }

 


    async componentDidMount(){

        console.log("Hello View Messages");

        const responseData = await axios.get(`http://localhost:5000/messages`, {
            headers: {
              'Content-Type':'application/json',
              'x-access-token': this.props.token.id_token,
              'user_name':'chathura'
            }
          });

          let list = [{id: 3}, {id: 3}]
          console.log(list.length)
          list  =responseData.data.messages;
          console.log(list.length)
           let array=[];
          for(let i =0; i< list.length; i++){

array[i] = list[i]
          }

        
          this.setState({messages: array})
          console.log(this.state.messages);
    }
    




    mslist = () => {
       let {messages} = this.state
       let l = [];
       
       console.log(messages.length, "hello Arry")
        return messages.map(m => {
            return (
                <tr>
             <td>{m.message}</td>
             <td>{m.createdAt}</td>
             
              </tr>
            )
        })
    }




    render() { 
        console.log(this.state.messages);
        let {messages} = this.state
        return (

            <>
            
             <table className='table'>
            <thead>
                <tr>
                    <th>Message</th>
                    <th>Time</th>
                    
                </tr>
            </thead>
       

            <tbody>

            {
            this.mslist()
               
            }
              
              

                  
            </tbody>
        </table>
            </>
           
        );
    }
}
 
export default ViewMessages;