function Main(){

    let articles = [
        {
            title:"Gratis kebab i Söderort!",
            url: "https://react.dev/"
        },
        {
            title:"101 dalmatiner till salu",
            url: "https://react.dev/"
        },
        {
            title:"Hangover 42 ute på bio nu",
            url: "https://react.dev/"
        }
    ]

    return(
        <main>

            {articles.map((article) => 
                <article>
                    <h3>{article.title}</h3>
                    <a href={article.url}>Länk till artikel</a>
                </article>)
            }

            {/* <article>
                <h3>Nyhetsartikel</h3>
                <a href="#">Länk till nyhet</a> 
            </article>
            <article>
                <h3>Nyhetsartikel</h3>
                <a href="#">Länk till nyhet</a> 
            </article>
            <article>
                <h3>Nyhetsartikel</h3>
                <a href="#">Länk till nyhet</a> 
            </article> */}
      </main>
    )
}

export default Main