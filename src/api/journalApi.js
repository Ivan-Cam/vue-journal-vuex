import axios from 'axios'

const journalApi = axios.create( {
    baseURL: 'https://vue-demos-37e2a-default-rtdb.firebaseio.com'
} )

export default journalApi