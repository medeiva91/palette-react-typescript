import { PaletteAction, paletteActionTypes, PaletteState } from "../../types/palette";

const defaultActiveColor:string = '#ccc';

const initialState: PaletteState = {
    colors: [
    ],
    activeColor: null,
    activeColorHex: defaultActiveColor,
    isAdding: false
}

export const paletteReducer = (state = initialState, action: PaletteAction) => {
    switch (action.type) {
        case paletteActionTypes.CLEAR_PALETTE:
            return { ...state, colors: [], activeColor: null, activeColorHex: defaultActiveColor, isAdding: false}
        case paletteActionTypes.ADD_COLOR:
            return { ...state, isAdding: true}
        case paletteActionTypes.CHOICE_COLOR:
            return { ...state,  activeColorHex: action.payload}
        case paletteActionTypes.ADD_COLOR_SUCCESS:
                return { ...state, isAdding: false, colors: [ ...state.colors, action.payload], activeColorHex: defaultActiveColor}
        case paletteActionTypes.REMOVE_COLOR:
                return { ...state, colors: state.colors.filter( color => color.id !== action.payload)}
        case paletteActionTypes.CHANGE_COLOR:
                return { ...state, activeColor: action.payload, activeColorHex: action.payload.hex}
        case paletteActionTypes.CHANGE_COLOR_SUCCESS:
                 return {...state, activeColor: null, activeColorHex: defaultActiveColor, colors: state.colors.map((color) => {
                    if (color.id === action.payload.id) {
                        return action.payload;
                    } 
                    return color;
                 }) }
        default:
          return state;
    }
}