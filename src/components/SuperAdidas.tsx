import React, {FC} from 'react';

type SuperAdidasPropsTYpe = {
    tasks: InType[]
    children?: React.ReactNode
}

export type InType = {
    id: number
    title: string
    isDone: boolean
}

export const SuperAdidas: FC<SuperAdidasPropsTYpe> = (props) => {
    const {tasks, children} = props
    return (
        <div>
            <ul>
                {tasks.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.isDone}/>
                        </li>
                    )
                })}
            </ul>
            <div>{children}</div>
            <hr/>
        </div>
    );
};

