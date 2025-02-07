import { useState } from "react";
import AnswersList from "./AnswersList.jsx";


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])

  
  const initialState = {
    colour: "",
    spendtime: [],
    review: "",
    username: "",
    email: ""
  }

  const [formData, setFormData] = useState(initialState)


  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  } 

  const getRadioValue = (event) => {
    setFormData({...formData, colour: event.target.value})
  }

 const handleSpendtime = (event) => {
  if (event.target.checked) {

 setFormData({...formData, spendtime: [...formData.spendtime, event.target.value]})
}
else{
 const updatedFormData = formData.spendtime
 const i = updatedFormData.findIndex(value => value === event.target.value)
 updatedFormData.splice(i, 1)

}

}


  const handleSubmit = (event) => {
    event.preventDefault();

    const answerItem = {
      username: formData.username,
      colour: formData.colour,
      spendtime: formData.spendtime,
      review: formData.review,
      email: formData.email,
    };

    console.log("Formdata", formData)

    setAnswersList([...answersList, answerItem])
    
    setFormData({
      colour: "",
      spendtime: [],
      review: "",
      username: "",
      email: ""
    });
    console.log("Form submitted:", answerItem)

  }



 
  return (

        <main className="survey">
          <section className={`survey__list ${open ? "open" : ""}`}>
            <h2>Answers list</h2>
            <AnswersList answersList={answersList}/>
          </section>

          <section className="survey__form">
            <form className ="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>

            <div className= "form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
                <ul>
                <li>
                <input id="color-one" type="radio" name="color" value="1" onClick={getRadioValue}
                checked={formData.colour === "1"}/>
                <label htmlFor="color-one">
                1
                </label>
                </li>

              <li>
                <input id="color-two" type="radio" name="color" value="2" onClick={getRadioValue}
                checked={formData.colour === "2"}/>
              <label htmlFor="color-two" > 
              2
                </label>
                </li>

                <li>
                <input id="color-three" type="radio" name="color" value="3" onClick={getRadioValue}
                checked={formData.colour === "3"} /> <label 
                htmlFor="color-three"
                > 3
                </label>
                </li>

                <li>
                <input id="color-four" type="radio" name="color" value="4" onClick={getRadioValue}
                checked={formData.colour === "4"} />
                  <label htmlFor="color-four" >
                    4
                  </label>
                </li>
               </ul>
              </div>

              <div className= "form__group">
               <h3>How do you like to spend time with your rubber duck</h3>
               <ul>
                <li>
                  <label
                    ><input
                      name="spend-time"
                      type="checkbox"
                      value="swimming"
                      onChange={handleSpendtime}
                      checked={formData.spendtime.includes("swimming")}
                    />Swimming</label>
                </li>
                <li>
                  <label>
                    <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="bathing" 
                    onChange={handleSpendtime}
                    checked={formData.spendtime.includes("bathing")}
                    />Bathing </label>
                </li>
                <li>
                  <label
                    ><input
                      name="spend-time"
                      type="checkbox"
                      value="chatting"
                      onChange={handleSpendtime}
                      checked={formData.spendtime.includes("chatting")}
                    />Chatting</label>
                </li>
                <li>
                  <label
                    ><input name="spend-time" type="checkbox" value="noTime" onChange={handleSpendtime}
                    checked={formData.spendtime.includes("noTime")} /> I dont like to spend time with it </label>
                </li>
              </ul>
              </div>
              <label>
          What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            value={formData.review}
            onChange={handleChange}>
          </textarea></label>
          <label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
             />
            </label> 
            <label>Leave us your email pretty please??
              <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            /> </label >
          <input className="form__submit" type="submit" value="Submit Survey!" />
            </form>
          </section>
        </main>
  );

  }

export default Survey;
