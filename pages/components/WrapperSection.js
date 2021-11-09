import React, { Children } from 'react'

function WrapperSection(props) {
    return (
        <div className="container m-auto py-5 ">
            {props.children}
        </div>
    )
}

export default WrapperSection
