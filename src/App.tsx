import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cards } from "./component/Card/Card";
import { people } from "./component/User/FakeData";
import { idText } from "typescript";
import { Frame } from "./component/Frame/Frame";
import { Text } from "./component/Text/Text";
function App() {
    const [number, SetNumber] = useState([1, 2, 3, 4]);
    return (
        <>
            {
                <Frame>
                    {people
                        .filter((item) => item.isAvaiable)
                        .map(({ name, surname, job, pic, isAvaiable }) => (
                            <Cards
                                title={`${name} ${surname}`}
                                subtitle={job}
                                placeholder1={pic}
                                placeholder2={isAvaiable}
                            ></Cards>
                        ))}
                </Frame>
            }
        </>
    );
}

export default App;
