
const Notification = (props) => {
    return(
        <div className={`notification 
        ${props.notificationType ? props.notification.type.value : 'is-hidden'}`}>

            <button class="delete"></button>
            {props.notification.message}

        </div>
    );
}