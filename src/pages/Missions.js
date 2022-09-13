import React,{useState,useEffect} from 'react';
import missionService from '../services/missionService.js';
import Mission from '../components/Mission/Mission';

function Missions(){
    const [missionData, setMissionData] = useState([]);

    useEffect(() => { 
        missionService.getMission()
        .then( response => {
            console.log(response);
            if(response.status === 200){
                setMissionData(response.data);
        // console.log("Test");

            }
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <div className="container">
            <div className="row">
                {missionData.map((element) => {
                    return <Mission el={element} key={element.id}/>
                })}
            </div>
        </div>
    )

}

export default Missions;