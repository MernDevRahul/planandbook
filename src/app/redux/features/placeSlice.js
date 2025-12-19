
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

export const fetchPlace = createAsyncThunk("place/fetchPlace",
    async(slug,thunkAPI)=>{
        try {
            const response = await axios.get(`/subCategory/getSubCategoryBySlug/${slug}`);
            return response?.data?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const placeSlice = createSlice({
    name:"place",
    initialState:{
        place:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchPlace.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPlace.fulfilled,(state,action)=>{
            state.loading = false;
            state.place = action.payload;
        })
        .addCase(fetchPlace.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default placeSlice.reducer;