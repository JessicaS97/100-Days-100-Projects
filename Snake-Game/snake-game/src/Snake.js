import React from 'react'

export default (props) => {
    return (
        <div>
            {props.snakeBody.map((body, i) => {
                const style = {
                    left: `${body[0]}%`,
                    top: `${body[1]}%`
                }
                return(
                    <div className="snake" key={i} style={style}></div>
                )
            })}
        </div>
    )
}