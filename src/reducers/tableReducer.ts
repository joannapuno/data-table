import { Row } from "@/types"
import generateId from "@/utils/generateId"

const tableRows: Row[] = []

export default function tableReducer(state = tableRows, action: any) {
	switch (action.type) {
	case "ADD_CHARA": {
		const { charac } = action.payload 
		return [
			...state, 
			{ 
				id: generateId(), 
				...charac 
			}
		]
	}
	case "REMOVE_CHARA": {
		const { id } = action.payload
		return state.filter(item => item.id !== id)
	}
	default:
		return state
	}
}