import React from 'react'
import { Heading, Rback, Rcontainer, Rinfo, Rwrapper, Subtitile } from './reviewElement'

const Review = () => {
    return (
        <Rcontainer>
            <Rwrapper>
                <Rback></Rback>
                <Rinfo>
                    <Heading>Globally Connected</Heading>
                    <Subtitile>
                     There has never been a better time to eat organic
                     Organic means working with nature. We aim to produce
                     the best possible quality of Organic food you can get
                     and for a cheap price.
                    </Subtitile>
                </Rinfo>
            </Rwrapper>
        </Rcontainer>
    )
}

export default Review
