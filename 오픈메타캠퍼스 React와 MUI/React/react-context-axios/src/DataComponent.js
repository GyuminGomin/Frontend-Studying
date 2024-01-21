import React, { useContext } from "react";
import { DataContext } from "./DataContext";

const DataComponent = () => {
    const { data, loading } = useContext(DataContext);

    if (loading) {
        return <div> loading... </div>;
    }

    return (
        <ul>
            {data.map(item => {
                <li key={item.id}>
                    <h4>{item.title}</h4> <br/>
                    {item.body}
                </li>
            })}
        </ul>
    );
};

export default DataComponent;