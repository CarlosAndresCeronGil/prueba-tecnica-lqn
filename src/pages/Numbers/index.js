import React from "react";
import {useListOfNumbers} from "../../hooks/useListOfNumbers";

export default function Numbers() {
    // const [numbers, setNumbers] = useState([])
    const list = useListOfNumbers(100)

    return (
        <div>
            { list.map(singleNumber => (
                    <p key={singleNumber}>
                        {singleNumber}
                    </p>
            )) }
        </div>
    )
}