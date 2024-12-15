
const ApplicationCard = ({notification}) => {
    return (
        <div
            className={`notification-card ${notification.status === 'approved' ? 'approved' : notification.status === 'pending' ? 'pending' : 'reviewed'}`}
            style={{
                backgroundColor: notification.status === 'approved' ? '#f0f8ff' : notification.status === 'pending' ? '#d3d3d3' : '#e0e0e0',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <div>
                <div><strong>{notification.date}</strong></div>
                <div><strong>{notification.name}</strong></div>
                <div>{notification.title}</div>
                <div>{notification.document}</div>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <button style={{padding: '5px 10px'}}>Ответить</button>
                <button style={{padding: '5px 10px'}}>
                    {notification.status === 'approved' ? 'Рассмотрено' : notification.status === 'pending' ? 'Ожидает' : 'Рассмотрено'}
                </button>
                <button style={{padding: '5px 10px'}}>📄</button>
            </div>
        </div>
    );
};

export default ApplicationCard;