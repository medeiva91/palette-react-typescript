import React from 'react';
import { BlockPicker } from 'react-color';
import removeSvg from '../../assets/img/remove.svg'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UIColor } from '../../types/palette';

 const ColorBlock: React.FC<{color: UIColor, blockColorPickerEl: any, isNewBlock: boolean}> = ({color, blockColorPickerEl, isNewBlock}) =>{
    
    const { activeColor,  activeColorHex } = useTypedSelector(state => state.palette);
    const { RemoveColor, ChangeColor, ChoiceColor  } = useActions();

    const isChengeColor = activeColor && activeColor.id === color.id;
    
    return (
        <div className="palette__colors-item" style={ (isNewBlock || isChengeColor) ? {backgroundColor: activeColorHex } : {backgroundColor: color.hex}}  
            onClick= { () => { 
                    if (!isNewBlock) { 
                        ChangeColor(color) 
                    }
                }
            }>

            { 
                !isNewBlock && 
                <img 
                    src={removeSvg} 
                    alt="Remove icon" 
                    className="remove-icon" 
                    onClick={ (e)=> { 
                        e.stopPropagation();
                        RemoveColor(color.id)
                    }}
                />
            }
            
            { 
                (isNewBlock || 
                (isChengeColor)) &&  
                <div ref={ blockColorPickerEl } >
                    <BlockPicker 
                        className="colorPicker" 
                        color={ activeColorHex } 
                        onChangeComplete={(color) => {
                            ChoiceColor(color.hex) ;
                        }} 
                    />
                </div>
            }
        </div>
    );
} 

export default ColorBlock;