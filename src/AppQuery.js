import react from "react";
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import Navbar from "./ComponenetQuery/navbar";
import Plantes from "./ComponenetQuery/Planets";


const AppQuery = () => {

const queryClient = new QueryClient();
    return(
        <div className='AppQuery'>
            <Navbar />
            <QueryClientProvider client={queryClient} >
                <Plantes />
            </QueryClientProvider>
        </div>
    )
}
export default AppQuery