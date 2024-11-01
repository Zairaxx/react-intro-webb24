//Komponent

function Header(props) {

    let isLearningReact = true;

    return(
        <header>
            <h1 className="rubrik">{props.website}</h1>
            <h2>{props.test}</h2>
            {/* Exempel på Conditional rendering */}
            <h3>{isLearningReact ? "Vi lär oss React" : "Vi lär oss inte React"}</h3>
        </header>
    )
}

export default Header