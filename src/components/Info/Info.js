import React from 'react'
import { InfoCols, InfoContainer, InfoRow, InfoWrapper, ForSpan, Subtitle } from './InfoElements'
import '../aboutUs/about.css'

const Info = () => {
    return (
        <InfoContainer>
            <div className="organic">Our organic farm in Numbers</div>
            <InfoWrapper>
                    <InfoCols>
                        <ForSpan>100</ForSpan>
                        <Subtitle>household per month</Subtitle>
                    </InfoCols>
                    <InfoCols>
                        <ForSpan>100</ForSpan>
                        <Subtitle>experts working</Subtitle>
                    </InfoCols>
                    <InfoCols>
                        <ForSpan>100%</ForSpan>
                        <Subtitle>Satisfied customers</Subtitle>
                    </InfoCols>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info
