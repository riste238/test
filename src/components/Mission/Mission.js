import React, { useState, useEffect } from 'react';
import './mission.css';
import MissionModal from '../../modal/MissionModal';

function Mission(props) {
    const [missionData, setMissionData] = useState({});
    // const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        setMissionData(props.el);
        //    console.log(props.el.id);
    })
    return (
        <div className="col-6 colMission">
            {missionData.name ? <div>
                <img className="img-mission" src={missionData.links.patch["small"]} alt=""
                />
                <p>{missionData.name}</p>
            </div> : null}

            {<MissionModal el={missionData} />}

        </div>
    )
}
export default Mission;