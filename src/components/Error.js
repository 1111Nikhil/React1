import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return(
        <div>
            <h1>Opps!!!</h1>
            <h2>Not Found</h2>
            <h2>{err.status}:{err.statusText}</h2>
        </div>
    );
};

export default Error;