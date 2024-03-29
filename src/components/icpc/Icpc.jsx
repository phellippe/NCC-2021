import React from 'react'
import Intro from './intro/Intro'
import Rules from "./rules/Rules";
import Subscriptions from './subscriptions/Subscriptions'

export default function icpc() {
    return (
        <div className="sections">
        <Intro/>
        <Rules/>
        <Subscriptions/>
        </div>
    )
}
