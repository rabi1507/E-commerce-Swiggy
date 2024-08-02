
const User = ()=> {
    const immediateJoiner = `Node.js | Express.js | JavaScript | JSX | React | Context API | Redux | MongoDB | Aggregation | Git` 
    return <div className="user-card p-6 mt-20 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
        <h1 className=" font-bold p-2 m-2"> Name: Rabi Kumar </h1>
        <h2 className="font-extralight p-2 m-2"> Location : Bangalore, Karnataka </h2>
        <h3 className="font-semibold p-2 m-2"> Email : rabi.mkumar12@gmail.com </h3>
        <h3 className="font-medium text-green-950 p-2 m-2"> Skills:  {immediateJoiner}</h3>

    </div>
}

export default User;