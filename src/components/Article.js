
function Article({title, date, preview, minutes}) {
    let coffeeCupElement = <small>☕️</small>;
    let bentoBoxElement = <small>🍱</small>
    const coffeeCups = [];
    const bentoBoxes = [];
    const numCoffeeCups = Math.ceil(minutes / 5);
    const numBentoBoxes = Math.ceil(minutes / 10);
    

    for (let i = 0; i < numCoffeeCups; i++) {
        coffeeCups.push(coffeeCupElement);
    }

    coffeeCups.map((coffeeCup, index) => {
        return <small key={index}>{coffeeCup}</small>
    })

    for (let i = 0; i < numBentoBoxes; i++) {
        bentoBoxes.push(bentoBoxElement);
    }


    bentoBoxes.map((bentoBox, index) => {
        return <small key={index}>{bentoBox}</small>
    })




    return (<article>
        <h3>{title}</h3>
        <small>{date ? date : "January 1, 1970"} • {(minutes < 30) ? coffeeCups : bentoBoxes} {minutes} min read</small>
        <p>{preview}</p>
    </article>);

}

export default Article;