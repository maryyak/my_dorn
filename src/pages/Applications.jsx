import {useState} from "react";
import useFetch from "../hooks/useFetch";
import ApplicationCard from "../components/ApplicationCard";

const Applications = () => {
    const [applications, setApplications] = useState([]);

    useFetch('/data/applicationsData.json', setApplications);

    return (
        <div className="App">
            <div className="container">
                <div >
                    {applications.map(notification => (
                        <ApplicationCard key={notification.id} notification={notification}/>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default Applications;