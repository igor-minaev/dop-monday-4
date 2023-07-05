import React, {FC} from 'react';
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    name?: string
    callBack: () => void
    color?: string
    disabled?: boolean
    children: React.ReactNode
}

export const SuperButton: FC<SuperButtonPropsType> = (props) => {
    const {name, callBack, color, disabled, children, ...otherProps} = props
    const onClickHandler = () => callBack()

    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default} 
    ${disabled ? s.disabled : ''}
    `
    return (
        <button className={finalClassName} onClick={onClickHandler}>{children}</button>
    );
};


//----------------------------------------------------------------------------
// import React, {FC} from 'react';
//
// type SuperButtonPropsType = {
//     name: string
//     callBack: () => void
//     color: string
// }
//
// export const SuperButton: FC<SuperButtonPropsType> = ({
//                                                           name,
//                                                           callBack,
//                                                           color,
//                                                           ...otherProps}) => {
//     const onClickHandler = () => callBack()
//     return (
//         <button onClick={onClickHandler}>{name}</button>
//     );
// };

