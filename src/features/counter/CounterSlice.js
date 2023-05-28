import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        allDonated:localStorage.getItem('moneyDonnated__LS') || 0
    },
    reducers: {
        createValue: (state,action) => {

            state.value =action.payload
        },
        increment: state => {

            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        addToAll:(state,action)=>{
            state.allDonated =Number(state.allDonated) + Number(action.payload)
            console.log(action)
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,createValue,addToAll } = counterSlice.actions

export default counterSlice.reducer