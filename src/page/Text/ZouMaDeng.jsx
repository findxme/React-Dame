import React, { Component } from 'react';
import './A.less'
// @impot './A.css'
import { Carousel } from 'antd';
class ZouMaDeng extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>

        );
    }
}

export default ZouMaDeng;