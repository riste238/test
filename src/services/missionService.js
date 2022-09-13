import axios from 'axios';

class missionService {
    static getMission() {
        return axios.get('https://api.spacexdata.com/v5/launches');
    }
}
export default missionService;