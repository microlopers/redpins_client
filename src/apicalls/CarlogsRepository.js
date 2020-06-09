import axios from "axios"
import { URL_CARLOGS } from "../config"

const loadCars = () => 
    axios.get(URL_CARLOGS)
        .then(cars => ({ cars }))
        .catch(error => ({ error }))


export {
    loadCars
};
