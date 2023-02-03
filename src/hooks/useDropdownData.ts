import { Character } from "@/types"

const useDropdownData = () => {
	const allCharactersList: Character[] = [
		{ name: "Xiao", element: "anemo" },
		{ name: "Jean", element: "anemo" },
		{ name: "Fischl", element: "electro" },
		{ name: "Albedo", element: "geo" },
		// { name: "Tighnari", element: "dendro" },
		// { name: "Alhaitham", element: "dendro" },
		// { name: "Wanderer", element: "anemo" },
		// { name: "Traveler", element: "dendro" },
		// { name: "Razor", element: "electro" },
		// { name: "Xiangling", element: "fire" },
	]

	return{
		allCharactersList
	}
}

export default useDropdownData