import React, { Component, useEffect, useState } from 'react'


export default function Picture() {


    useEffect(() => {

        const setTimer = (setInterval(() => {
            console.log("Timer Called");
        }, 1000));
        return () => clearInterval(setTimer)
    }, []);
  return (
    <img src="ideogram.jpeg" className="mx-auto"></img>
  )
}


/*export default class Picture extends Component {
    constructor(props){
        super(props)
        this.state = {timer : null}
    }
    componentDidMount(){
        this.setState({
            timer : setInterval(() => {
                console.log("Timer called");
            }, 1000)
        })
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }
    componentWillUnmount(){
        console.log("Component picture Unmont");
        clearInterval(this.state.timer)
    }
    render() {
    return (
        <img src="ideogram.jpeg" className="mx-auto"></img>
    )
  }
}*/
