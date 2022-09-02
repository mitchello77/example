import User from "./User";

const UserList = ({ users = [] }) => {
	return (
		<div>
			{users.map(user => (
				<User {...user} />
			))}
		</div>
	);
}

export default UserList;