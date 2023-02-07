import { ADD_CHARA } from "@/actions/actionTypes"
import { Row, Column } from "@/types"
import { Action } from "redux"

const tableRows: Row[] = [
	{
		character: "Xiao",
		element: "Anemo",
		role: "DPS",
		level: 90,
		weapon: "Primordial Jade Winged-Spear",
		artifactSet: "Viridescent + Gladiator",
		notes: "Glass cannon"
	},
	{
		character: "Jean",
		element: "Anemo",
		role: "Healer",
		level: 90,
		weapon: "Favonious Sword",
		artifactSet: "Viridescent + Gladiator",
		notes: "Battery for Xiao plus a great healer"
	}, {
		character: "Albedo",
		element: "Geo",
		role: "Support",
		level: 90,
		weapon: "Cinnabar Spindle",
		artifactSet: "Opulent",
		notes: "Extra DMG and bonus shield with elemental reactions"
	}, {
		character: "Fischl",
		element: "Electro",
		role: "Support",
		level: 90,
		weapon: "Favonious Bow",
		artifactSet: "Shimenawa + Thunder",
		notes: "Extra energy, extra DMG and reactions"
	},
]

export default function tableReducer(state = tableRows, action: any) {
	switch (action.type) {
	case ADD_CHARA: {
		const { id, charac } = action.payload 
		return [
			...state,
			{
				id: id,
				...charac
			}
		]
	}
	default:
		return state
	}
}