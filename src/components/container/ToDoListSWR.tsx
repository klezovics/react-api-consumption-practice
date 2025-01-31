import useSWR from 'swr';
import {Todo} from '../../model/todos.ts';
import ToDoList from '../presentation/ToDoList.tsx';
import axiosClient, {BASE_URL} from '../../api/axios/axiosClient.ts';

// API Fetchers
const ToDoListSWR = () => {

    //C1: OK, SWR is an improvement, because it handles the loading, error, data states for you
    //No boilerplate. Gives you a more structured approach
    //C2: Note, that we do not need a provider here !! The hook just works !
    //C3: On the downside, for this we pay with not having global state and each component will refetch data
    // If you want global state management wrap everything in SWRConfig
    const {data: todos, error, isLoading} = useSWR<Todo[]>(
        //C2: ARG1 -> define the ID of the query (used for caching)
        '/todos',
        //C3: ARG2 -> Fetcher function -> url from the first argument is passed here
        async (url: string) => {
            const res = await axiosClient.get<Todo[]>(url)
            const data = res.data.slice(0, 10)
            return data;
        }
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <ToDoList todos={todos}/>;
};

export default ToDoListSWR;
