const generateId = () => {
	const createId = () => Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1)
	return createId() + createId() + "-" + createId()
}

export default generateId