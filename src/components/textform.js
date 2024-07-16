import React,{useState} from 'react'

export default function Textform(tin) {
  const  handleUpClick=()=>{
    console.log("Uppercase was clicked");
    let newtext=text.toUpperCase();
    settext(newtext);
  }
  const  handleLoClick=()=>{
    console.log("Uppercase was clicked");
    let newtext=text.toLowerCase();
    settext(newtext);
  }
  const  handleonChange=(event)=>{
    console.log("On Change");
    settext(event.target.value);
  }
  const handleextraspace=()=>{
    let mod=text.split(/[ ]+/);
    settext(mod.join(" "))
  }
  const [text, settext] = useState('Enter Text Here');
  return (
    <>
    <div>
        <h1>{tin.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">NIRVANA</label> */}
        <textarea className="form-control" onChange={handleonChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleextraspace}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3'>
      <h2>SUMMARY</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>PREVIEW</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
