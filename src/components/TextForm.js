import React, { useState } from 'react'

export default function TextFrom(props) {
    const hendleclickUpper=()=>{
        console.log("uppercase was clicked")
        setText(text.toUpperCase())
      }
      const hendleclickLower=()=>{
        console.log("uppercase was clicked")
        setText(text.toLowerCase())
      }
      const handleOnChange=(event)=>{
        console.log("on Change");
        setText(event.target.value)
      }
      const hendleclickclear=()=>{
        console.log("Clear button was cliciked");
        setText("");
      }
    //   const revcase=()=>{
    //    var String;
    //     for(let i=0;i<=text.length;i++)
    //     {
    //       var newstr ="";
    //         if(text.charAt(i).isUpperCase===true)
    //         {
    //           //newstr.charAt(i)=text.charAt(i).toLowerCase()
    //         }
    //         else if(text.charAt(i).isLowerCase===true)
    //         {
    //          // newstr.charAt(i)==text.charAt(i).toUpperCase()
    //         }
    //     }
    //     setText(newstr)
    //   }
      const handlecopy=()=>{
        console.log("I am copy function");
        var cpytxt=document.getElementById("mybox");
        cpytxt.select();
        navigator.clipboard.writeText(cpytxt.value);
      }
      const handleextraspace=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
      }
    const[text,setText]=useState('')
  return ( 
    
    <>
     <div className="container"  style={{color:props.mode==='dark'?'white':'black',backgroundColor:'#8eeafd'}}></div>
<div className="mb-3"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <label  className="form-label">Enter Text Here For Analyze</label>
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#212529':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-success" onClick={hendleclickUpper}>Convert to UpperCase </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button className="btn btn-primary" onClick={hendleclickLower}>Convert to LowerCase</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button className="btn btn-warning" onClick={hendleclickclear}>Clear Text</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button className="btn btn-info" onClick={handlecopy}>Copy Text</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button className="btn btn-danger" onClick={handleextraspace}>Remove extra space</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>your text summary</h1>
  <p>{text.split(" ").length} words & {text.length} charactors</p>
  <p>{0.008*text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
    </>
  )
}
