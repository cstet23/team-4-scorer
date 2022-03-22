import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Counter = ({ label }: { label: string }) => {
    const [count, setCount] = useState<number>(0);

    return (
        <div style={{ display: "flex", gap: "1rem" }}>
            <h3>{label}</h3>
            <Button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </Button>
            <Button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                -
            </Button>
            <p>{count}</p>
        </div>
    );
};
