const getPermition = ()=>{
    return Notification.requestPermission()
};

const push = (params) =>{
    getPermition()
        .then(status =>{

        })
        .catch(e => console.log('ERROR TO GET NOTIFICATION',e))
};


