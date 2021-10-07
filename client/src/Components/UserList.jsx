export default function UserList({users = []}) {

    return (
        <div className="user-list">
            {users.map((user) => (
                <div className="user-list__container" key={user.id}>
                    <div className="user-list__avatar">
                        <div className="status-circle" data-status={user.status}></div>
                        <img src={user.img} alt={user.name} />
                    </div>
                    <div className="user-list__name">
                        <p>{user.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};