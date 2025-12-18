import axios from "../../../utils/axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const AllPackagesThunk = createAsyncThunk("packages/AllPackages",
    async (category_name, thunkAPI) => {
        try {
            const response = await axios.get(`/packages/getTourPackagesByCategory/${category_name}`);
            console.log(response?.data?.data);
            return response?.data?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const indiaSlice = createSlice({
    name: "India",
    initialState: {
        allPackages: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AllPackagesThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(AllPackagesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.allPackages = action.payload;
            })
            .addCase(AllPackagesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})


export default indiaSlice.reducer;