import axios from "axios";
//personalized http client with predefined configuration
//rawg api base url and key
//rawg api key is  
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        //key
        key: '73f3e9847dd7469aaf42d209407b6f16'
        
    }
})