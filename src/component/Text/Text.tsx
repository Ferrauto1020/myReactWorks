import { Console } from "console";
import { reverse } from "dns";
import { useEffect, useState } from "react";
import axios from "axios";
export const Text = () => {
    
    const [x, setX] = useState("");
    const [isPal, SetPal] = useState(false);
    const reverse = () => {
        console.log("ho premuto x:", x);
        setX(x?.split("").reverse().join(""));
    };
    const verifyWord = (x: string) => {
        const p = x?.split("").reverse().join("");
        return p;
    };
    useEffect(() => {
        verifyWord(x) === x, [x];
    });
    return (
        <div>
            <input onChange={(ev) => setX(ev.target.value)} />
            {x}
            <button onClick={reverse}>Reverse</button>
            <p>{x.length > 0 && isPal === true && "parola palindroma"}</p>
        </div>
    );
};
