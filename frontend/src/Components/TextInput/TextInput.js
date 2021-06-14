import React from 'react';
import {Input, Label,Item,Icon,Content} from 'native-base';
import Colors from '../../Themes/Colors'
import customStyle from './styles'

const CustomTextInput = ({labelName, placeholder , valueChange , value})=>{
    return(
        <Item floatingLabel style={{margin:10}} >
            <Label>{labelName}</Label>
            <Input
             onChangeText={(value)=>valueChange(value)}
             value={value}
             placeholder={placeholder}
             selectionColor = {Colors.primaryColor}
             />
        </Item>
        //   <Item success>
        //     <Input placeholder='Textbox with Success Input'/>
        //     <Icon name='checkmark' />
        //   </Item>

    )
    
}

export default CustomTextInput;