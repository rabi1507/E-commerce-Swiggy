import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    return (
        <div className=" justify-center">
            <h4 className="text-center text-red-800 w-full mb-4 " > {err.status} </h4>
            <h4 className=" text-center text-red-600 w-full "> {err.statusText} </h4>
        </div>
    )
}

export default Error;