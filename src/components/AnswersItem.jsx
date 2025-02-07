
const answersSet = {
swimming: "Swimming",
bathing: "Bathing",
chatting: "Chatting",
noTime: "I don`t like to spend time with it",
}

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}> {answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  // eslint-disable-next-line react/prop-types
  answerItem: {colour, spendtime, review, username, email },
}) {
  
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendtime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <p>
          <div>{username} can be contacted on his email, which is:</div>
          <span className="answer__line">{email}</span>
        </p>
      </article>
    </li>
  );
}

