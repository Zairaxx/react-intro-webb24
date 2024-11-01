// function Footer(){}

let Footer = (props) => {

    let logoURL ="https://www.logoai.com/uploads/output/2023/11/12/8dabb47892e28005e2589ce4dca46146.jpg?t=1699760347"
    return (
        <footer>
            <h4>{props.website}</h4>
            <img src={logoURL} alt="Logga för företag" width="150" />
        </footer>
    )
}

export default Footer