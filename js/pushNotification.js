const getPermition = () => {
    return Notification.requestPermission()
};

const push = (params) => {
    getPermition()
        .then(status => {
            const notfication = new Notification(params.title, params.options || {})
        })
        .catch(e => console.log('ERROR TO GET NOTIFICATION', e))
};
$('button.ok').on('click', () => {
    const params = {
        title: "Confirmado",
        options: {
            body: "Obrigado por ir ao evento !",
            icon:'images/icon.png'
        }
    };
    push(params);
});

$('button.not-ok').on('click', () => {
    const params = {
        title: "Você não vai ?",
        options: {
            body: "Poxa... uma pena. Estavamos te esperando. :(\nFica para próxima :)",
            icon:'images/close_red.png'
        }
    };
    push(params);
});