import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+t ext);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success");
  }
  const handleClear=()=>{
    let newtext3=text.replace(text,'');
    // string.replace('textToReplace', '');
    setText(newtext3);
    props.showAlert("Text Area is Cleared","success");
  }
  const handleDownClick=()=>{
    // console.log("Uppercase was clicked"+t ext);
    let newtext2=text.toLowerCase();
    setText(newtext2);
    props.showAlert("Converted to LowerCase","success");
  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);  //without writing this line you want be able to edit the text written inside the box as the value of 'text' will not change but by using this line you are simultaneouly updating the text using settext so you can update it
  }
  const handleCopy=()=>{
    // let copyText=document.getElementsByClassName('form-control');
    // copyText.select();
    // navigator.clipboard.writeText(copyText.value);
    // var text=document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();   // this lines does not allow the text to be selected in the text area even when it is copied

    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success");
  }
  const handleExtraspaces=()=>{
    const newtext4=text.replace(/\s{2,}/g, ' ').trim();
    setText(newtext4);
    props.showAlert("Extra Spaces removed","success");
  }
  
  const [text,setText]=useState('');
  // const [text,setText]=useState('Enter text here');
  // text="new text"; // wrong way to change the state
  // setText("new text");  // this is the right way to do so
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
          
            <textarea className="form-control" value={text} onChange={handleOnChange} style={ {backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" placeholder='Enter text here' ></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleDownClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClear} >Clear</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraspaces} >Remove Spaces</button>

    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      {/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> */}
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>          {/*Now if you will write any text in next line earlier it was not included but now it will be included  because now we are using /\s+/  it is used to split on the basis of whitespaces and new line is also considered as */}
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes reading time</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
       
    </div>
    </>
  )
}
//  hello