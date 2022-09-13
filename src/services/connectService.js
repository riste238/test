import axios from 'axios';

class connectService {
    static sendData(body){
        return axios.post('/sendData',body);
    }
}
export default connectService;