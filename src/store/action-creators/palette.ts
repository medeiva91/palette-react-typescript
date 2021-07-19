import { PaletteAction, paletteActionTypes, UIColor } from "../../types/palette";

export function AddColor(): PaletteAction{
    return {type: paletteActionTypes.ADD_COLOR}
}

export function ClearPalette(): PaletteAction{
    return {type: paletteActionTypes.CLEAR_PALETTE}
}

export function AddColorSuccess(color: UIColor): PaletteAction {
    return {type: paletteActionTypes.ADD_COLOR_SUCCESS, payload: color}
}

export function ChoiceColor(color: string): PaletteAction {
    return {type: paletteActionTypes.CHOICE_COLOR, payload: color}
}

export function RemoveColor(id: number): PaletteAction {
    return {type: paletteActionTypes.REMOVE_COLOR, payload: id}
}

export function ChangeColor(color: UIColor): PaletteAction {
    return {type: paletteActionTypes.CHANGE_COLOR, payload: color}
}

export function ChangeColorSucces(color: UIColor): PaletteAction {
    return {type: paletteActionTypes.CHANGE_COLOR_SUCCESS, payload: color}
}

