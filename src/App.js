import ReactDOM from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/Body";

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header/>
           <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
