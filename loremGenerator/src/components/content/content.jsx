import { useState } from "react"
import "./content.css"
import { data } from "../../data.js";

export function Content(){
    const [count,setCount] = useState(0);
    const [text,setText] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        let amount = parseInt(count);
        if (amount < 0) {
            alert("Ayyo ! you know that you wrote negative input 😵");
            return; // Stop further execution
        } ;
        if (amount > 8) {
            alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");
            return; // Stop further execution
          }
        setText(data.slice(0,amount));
        return
        }
    
    return(
        <>
        <section className="section-center">
          <h3>Tired of boring lorem ipsum?</h3>
          <form className="lorem-form" onSubmit={handleSubmit}>
            <label>Paragraph:</label>
            <input type="number" name="amount" id="amount" value={count} onChange={(e)=> setCount(e.target.value)} />
            <button className="btn">Generate</button>
            </form>
            <article>
                {text.map((data,index) =>(
                    <p key={index}>{data}</p>
                ))}
            </article>
            </section>
        </>
    )
}