function StudentCard(props) {
    return (
        <div className="student-card">
            <h2>{props.name}</h2>
            <p>Department: {props.dept}</p>
            <p>Year: {props.year}</p>
        </div>
    );
}

export default StudentCard;