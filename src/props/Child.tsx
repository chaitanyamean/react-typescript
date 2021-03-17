import React from "react"

interface ChildProps {
    color: string
}


export const Child = ({ color } : ChildProps) => {
    return <div>Hi this is {color}</div>
}

export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
    return <div>This is functional {color}</div>
}