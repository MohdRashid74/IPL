import './index.css'

const LatestMatch = props => {
  const {details} = props
  console.log(details)
  return (
    <div className="match-container">
      <div className="leader-name-conatainer">
        <h1 className="team-heading">{details.competing_team}</h1>
        <p className="date-paragraph">{details.date}</p>
        <p className="date-paragraph">{details.venue}</p>
        <p className="date-paragraph">{details.result}</p>
      </div>
      <img
        src={details.competing_team_logo}
        className="image-team-logo"
        alt="logo"
      />
      <div className="leader-name-conatainer">
        <p className="date-paragraph1">first Innings</p>
        <p className="date-paragraph1">{details.first_innings}</p>
        <p className="date-paragraph1">Second Innings</p>
        <p className="date-paragraph1">{details.second_innings}</p>
        <p className="date-paragraph1">Man Of The Match</p>
        <p className="date-paragraph1">{details.man_of_the_match}</p>
        <p className="date-paragraph1">Umpire</p>
        <p className="date-paragraph1">{details.umpires}</p>
      </div>
      ##start from
    </div>
  )
}
export default LatestMatch
