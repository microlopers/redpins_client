import axios from "axios"
import { URL_CARLIST } from "../config"

const loadCars = () =>
    axios.get(URL_CARLIST)
        .then(cars => ({ cars }))
        .catch(error => ({ error }))

export {
    loadCars
};
