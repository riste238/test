import React, { useState } from 'react';
import connectService from '../../services/connectService';

function Comments({el}) {
   
    const [useComments, setUseComments] = useState({});
    const [isFormValid, setIsFormValid] = useState(true);

    function handlerText(e){
        // console.log(e.target.value);
        let comment = useComments;
        comment[e.target.name] = e.target.value;
        setUseComments(comment);
        console.log(comment);
    }
    const onSubmitForm = (e) =>  {
            e.preventDefault();
           
          
            if(!useComments.id) {
                setIsFormValid(false);
            }
            setIsFormValid(true);
           
            connectService.sendData(useComments)
            .then(response =>{
                if(response && response.status === 200)
                console.log("API response ", response);
            })
            .catch(error => {
                console.log(error);
            })
  }
    return (
        // <div>
          
            <form onSubmit={onSubmitForm} method="post">
            <textarea type="text" name={el.name} className="textarea" placeholder="Comments" rows="2" cols="40"  onChange={(e)=> {handlerText(e)}}/>
        
          <input type="submit" value="Submit" />
         
          {!isFormValid ? <p>Form is not valid!</p> : null}
            </form>
        // </div>
    )
}

export default Comments;