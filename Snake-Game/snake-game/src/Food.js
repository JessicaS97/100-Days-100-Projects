import React from 'react'

export default (props) => {
    const style = {
        left: `${props.body[0]}%`,
        top: `${props.body[1]}%`
    }

    return (
        <div className="snake-food" style={style}></div>
    )
}