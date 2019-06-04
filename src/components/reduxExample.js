import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
var defaultState = {
    mang:['Android','IOS','NodeJS'],
    isAdding:true
}

var reducer = (state = defaultState, action)=>{
    switch(action.type){
        case 'TOGGLE_ADDING':
            return {...state, isAdding:false}
        case 'ADD_ITEM':
            return {...state,mang:[...state.mang, action.item]}
        // case 'DELETE_ITEM':
        //     return {...state,mang:state.mang.filter()}
    }
}

let store = createStore(reducer, compose(
    window.devToolsExtension? window.devToolsExtension():f=>f
));
 
console.log(store.getState());

store.dispatch({
    type:'ADD_ITEM',
    item:'SONY'
})

console.log(store.getState());