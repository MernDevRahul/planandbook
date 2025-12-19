import axios from "../../../utils/axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const AllDestinationsThunk = createAsyncThunk("destination/AllDestinations",
    async(thunkAPI)=>{
        try {
            const response = await axios.get("/subCategory/getAll")
            return response?.data?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const AllDestinationsByCategoryThunk = createAsyncThunk("destination/AllDestinationsByCategory",
    async(category_name,thunkAPI)=>{
        try {
            const response = await axios.get(`/subCategory/getSubCategoriesByCategoryName/${category_name}`)
            return response?.data?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const destinationSlice = createSlice({
    name:"Destination",
    initialState:{
        AllDestinations:null,
        AllDestinationsByCategory:null,
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(AllDestinationsThunk.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(AllDestinationsThunk.fulfilled,(state,action)=>{
            state.loading = false;
            state.AllDestinations = action.payload;
        })
        .addCase(AllDestinationsThunk.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(AllDestinationsByCategoryThunk.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(AllDestinationsByCategoryThunk.fulfilled,(state,action)=>{
            state.loading = false;
            state.AllDestinationsByCategory = action.payload;
        })
        .addCase(AllDestinationsByCategoryThunk.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default destinationSlice.reducer;