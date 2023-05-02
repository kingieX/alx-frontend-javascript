import ClassRoom from './0-classroom'

function initializeRooms() {
	const classRoomSizes = [19, 20, 34];
	const rooms = [];

	for (const size of classRoomSizes) {
		const room = new ClassRoom(size);
		rooms.push(room)
	}

	return rooms;
}

export default initializeRooms;
