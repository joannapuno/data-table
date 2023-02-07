import { ADD_CHARA } from "@/actions/actionTypes"
import { Row } from "@/types" 

let nextCharacId = 0

export const addCharac = (content: Row) => ({
	type: ADD_CHARA,
	payload: {
		id: ++nextCharacId,
		content
	}
})
