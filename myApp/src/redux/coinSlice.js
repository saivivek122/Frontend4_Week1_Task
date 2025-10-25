import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchCoins=createAsyncThunk('coins/fetchCoins',async()=>{
    return fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then((res)=>res.json())
    .then((data)=>data)
    .catch((error)=>{
        throw error;
    })
})
//both asked 
export const fetchCoinsAsync = createAsyncThunk('coins/fetchCoinsAsync', async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const coinSlice=createSlice({
    name:"coins",
    initialState:{
        data:[],
        searchTerm:"",
        sortTerm:null,
        sortOrder:"asc",
        isLoading:false,
        error:null
    },
    reducers:{
        setSearchTerm:(state,action)=>{
            state.searchTerm=action.payload

        },
        setSortTerm:(state,action)=>{
            state.sortTerm=action.payload.field
            state.sortOrder=action.payload.order
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCoins.pending,(state,action)=>{
            state.isLoading=true;

        })
        .addCase(fetchCoins.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        .addCase(fetchCoins.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message
        })
    }
})
export const{setSearchTerm,setSortTerm} =coinSlice.actions;
export default coinSlice.reducer