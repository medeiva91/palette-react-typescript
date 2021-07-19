import React, { useLayoutEffect, useRef } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import ColorBlock from './ColorBlock';

import './Palette.scss';

export const Palette: React.FC = () => {

    const { colors, activeColorHex, activeColor, isAdding } = useTypedSelector(state => state.palette);
    const { AddColor, AddColorSuccess, ChangeColorSucces, ClearPalette } = useActions();

    const newColorBlockEl = useRef<any>(null);
    const changeColorBlockEl = useRef<any>(null);

    const onClickEl:React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (isAdding && newColorBlockEl &&  newColorBlockEl.current && !newColorBlockEl.current.contains(e.target)) {
                let id:number = Math.floor(Math.random() * Math.random() * 10000);
                AddColorSuccess({id: id, hex: activeColorHex})
        } else if (activeColor && changeColorBlockEl &&  changeColorBlockEl.current && !changeColorBlockEl.current.contains(e.target)) {
                activeColor.hex = activeColorHex;
                ChangeColorSucces(activeColor);
        }
    }


    useLayoutEffect(() => {
        ClearPalette();
    }, [])

    return (
        <div className='palette' onClick={(e) => {onClickEl(e)}}>
            <div className="palette__colors">
                {
                    colors && colors.length > 0 && colors.map((color)=>{
                        return ( <ColorBlock color={color} key={ `colorId${color.id}`} blockColorPickerEl={changeColorBlockEl} isNewBlock={false}/>)
                    })
                }
              
                {
                    isAdding && 
                    <ColorBlock color={{id: 0, hex: activeColorHex}}  blockColorPickerEl={newColorBlockEl} isNewBlock={true} key="newBlock"/>

                }
            </div>
            <button onClick={()=> {AddColor()}}>
                    Добавить цвет
            </button>
        </div>
    )
}

