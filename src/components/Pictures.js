import React, { Component, useEffect, useRef, useState } from 'react'
import Picture from './Pic';



export default function Pictures() {

    const [images, setImg] = useState([
        "ideogram.jpeg",
        "ideogram -2.jpeg",
        "ideogram -3.jpeg"
    ]);
    const [image, setImage] = useState(null);

    function ImageComponent(){
        return(
            images.map((img, index) => {
                return <Picture imgName = {img} 
                index={index}
                handleReomve={handleReomveImg}
                />
            })
        );
    };


    function handleImageName(event){
        setImage(event.target.value);
        
    }
    function NewImages(){
        let Nimage = [...images, image];
        setImg(Nimage);
    }
    function handleReomveImg(index){
        setImg(images.filter((image, i) => i != index))
    }
    useEffect(() => {

        const setTimer = (setInterval(() => {
            console.log("Timer Called");
        }, 1000));
        return () => clearInterval(setTimer)
    }, []);

    const InputToFocus = useRef(null);

    useEffect(() => {
        InputToFocus.current.focus();
    })



  return (
    <div className='container mx-auto'>
        <div className='flex items-center justify-between gap-3'>
            <ImageComponent/>
        </div>
        <div className='flex items-center justify-center my-7'>
            <input name='inpp' type='text' ref={InputToFocus}
            className='mx-5 w-60 bg-blue-200 border border-blue-600 placeholder-blue-400 text-black focus:ring-blue-500 focus:border-blue-500 text-sm rounded-lg block w-full p-2.5 
            dark:bg-blue-200 dark:border-blue-600 dark:placeholder-blue-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={image} onChange={handleImageName}/>
            <button type='submit' className='bg-blue-700 py-2 px-3 text-white rounded' onClick={() => {NewImages(); setImage('');}}>Inserer l'image</button>
        </div>
    </div>
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
