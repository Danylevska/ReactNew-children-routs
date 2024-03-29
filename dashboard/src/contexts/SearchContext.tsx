import { Dispatch, createContext, useState } from "react";
import { DashboardPostInterface } from "../components/posts/types";
import { DashboardUserInterface } from "../components/users/types";
import {FC, PropsWithChildren} from "react";
import { useFetchData } from "../hooks/useFetchData";

 

interface SearchContextInterface {
    users: DashboardUserInterface[],
    posts:DashboardPostInterface[],

    value: string,
    setValue: Dispatch<string>,

    userSearchResults: DashboardUserInterface[],
    postsSearchResults: DashboardPostInterface[]

}

export const SearchContext = createContext<SearchContextInterface | null>(null);

export const SearchContextProvider: FC<PropsWithChildren> = ({children}) => {

    const [value, setValue] = useState<string>("")
 
    const { data: users } = useFetchData<DashboardUserInterface[]>(

        "https://jsonplaceholder.typicode.com/users",

    );

    const { data: posts } = useFetchData<DashboardPostInterface[]>(
        "https://jsonplaceholder.typicode.com/posts",
      
      );

const userSearchResults = users ? users.filter(({name}) => name.includes(value)) : [];
const postsSearchResults = posts ? posts.filter(({title}) => title.includes(value)) : []


    return <SearchContext.Provider value={{
     value,
     setValue,
     users: users || [],
     posts: posts || [],
     userSearchResults,
     postsSearchResults,
     
     }}>{children}

     </SearchContext.Provider>

}