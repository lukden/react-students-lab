import Score from "./Score"

const Student = (props) => {
  return (
    <>
    <h2>Name: {props.student.name}</h2>
    <h3>Bio: {props.student.bio}</h3>
    {props.student.scores.map(score => <Score key={score} score={score}/>)}
    </>
  )
}

export default Student