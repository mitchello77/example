const User = ({ id, name, email }) => {
	return (
		<div style={{
			border: '1px solid black',
			margin: '1rem'
		}}>
			({id}) {name} - {email}
		</div>
	);
}

export default User;