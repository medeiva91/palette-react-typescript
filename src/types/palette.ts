export interface UIColor {
    id: number;
    hex: string;
}

export interface PaletteState {
    colors: UIColor[];
    activeColor: null | UIColor;
    activeColorHex: string;
    isAdding: boolean;
}


export enum paletteActionTypes {
    ADD_COLOR = 'ADD_COLOR',
    CHOICE_COLOR = 'CHOICE_COLOR',
    ADD_COLOR_SUCCESS = 'ADD_COLOR_SUCCESS',
    CHANGE_COLOR = 'CHANGE_COLOR',
    CHANGE_COLOR_SUCCESS = 'CHANGE_COLOR_SUCCESS',
    REMOVE_COLOR = 'REMOVE_COLOR',
    CLEAR_PALETTE = 'CLEAR_PALETTE'

}

interface ClearPalette {
    type: paletteActionTypes.CLEAR_PALETTE;
}

interface AddColor {
    type: paletteActionTypes.ADD_COLOR;
}

interface AddColorSuccess {
    type: paletteActionTypes.ADD_COLOR_SUCCESS;
    payload: UIColor;
}

interface ChoiceColor {
    type: paletteActionTypes.CHOICE_COLOR;
    payload: string;
}

interface RemoveColor {
    type: paletteActionTypes.REMOVE_COLOR;
    payload: number;
}

interface ChangeColor {
    type: paletteActionTypes.CHANGE_COLOR;
    payload: UIColor;
}

interface ChangeColorSucces {
    type: paletteActionTypes.CHANGE_COLOR_SUCCESS;
    payload: UIColor;

}

export type PaletteAction = 
    AddColor 
    | ChoiceColor
    | AddColorSuccess 
    | RemoveColor 
    | ChangeColor 
    | ChangeColorSucces
    | ClearPalette 