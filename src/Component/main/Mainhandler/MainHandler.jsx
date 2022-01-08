import React, { Component } from 'react'
import Navbar from '../../menu/Navbar/Navbar'
import Content from '../content/content'

export class MainHandler extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Content/>
            </div>
        )
    }
}

export default MainHandler
