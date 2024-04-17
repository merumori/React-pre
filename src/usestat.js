import { useState } from "react";

function Usestat()
{
    const[count,setcount]=useState(0);
    const im = () =>{
        setcount(count+1);
    };
    const dim =() =>{
        setcount(count-1);
    };    
    
    
    return(
        <>
        <h1>add your post</h1>
        <p>count your post:{count}</p>
       
        <button type="submit"onClick={im}>add</button>
        <button type="submit" onClick={dim}>remove</button>
        </>
    );
}

export default Usestat;