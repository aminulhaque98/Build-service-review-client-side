import { toast } from "react-hot-toast";

export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    //get jwt token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('services-token', data.token)
            toast.success('Successfully login to the account');
        })
};

