import PayClass from "./PayClass";
const Contact = ()=>{
    return (
        <div className="p-6 mt-20 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
            <h4 className="font-bold mb-4" > Welcome Here 🙌</h4>
            <h6 className="font-bold mb-4"> Paying with class baed components </h6>
            <PayClass name ="Rabi Kumar" location= "Bangalore"/> 
        </div>
    )
}

export default Contact;