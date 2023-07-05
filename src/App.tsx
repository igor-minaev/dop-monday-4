import React from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {InType, SuperAdidas} from "./components/SuperAdidas";

function App() {
    const tasks: InType[] = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false}
    ]
    return (
        <div className="App">
            {/*<SuperButton  callBack={()=>{}} color={'red'}/>*/}
            <SuperButton callBack={() => {
            }} color={'red'}>RED SUPER BUTTON</SuperButton>
            <SuperButton callBack={() => {
            }} color={'secondary'}>SECONDARY SUPER BUTTON</SuperButton>
            <SuperButton callBack={() => {
            }}>SUPER BUTTON</SuperButton>
            <SuperButton callBack={() => {
            }} disabled>DISABLED SUPER BUTTON</SuperButton>

            <SuperAdidas tasks={tasks}/>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={() => {}} color={'red'}>RED SUPER BUTTON</SuperButton>
                <SuperButton callBack={() => {}} color={'secondary'}>SECONDARY SUPER BUTTON</SuperButton>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi, consequuntur delectus dicta distinctio incidunt laudantium quia similique velit veniam. Ab animi assumenda cum eaque earum eius expedita facilis harum magnam nesciunt nobis non officia, qui ut, voluptatibus? Corporis, nesciunt.</p>
            </SuperAdidas>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={() => {}} color={'red'}>RED SUPER BUTTON</SuperButton>
                <SuperButton callBack={() => {}} color={'secondary'}>SECONDARY SUPER BUTTON</SuperButton>
                <SuperButton callBack={() => {}}>SUPER BUTTON</SuperButton>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
                <div>info</div>
            </SuperAdidas>
        </div>
    );
}

export default App;
