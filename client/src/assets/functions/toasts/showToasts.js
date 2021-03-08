import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const showToasts = ({ errorMessage, successMessage }) => {

    if (errorMessage) {
        return toast.error(errorMessage, {
            position: "top-right",
            autoClose: 2000,
        })
    }

    if (successMessage) {
        return toast.success(successMessage, {
            position: "top-right",
            autoClose: 2000,
        })
    }
    return
};


export default showToasts

