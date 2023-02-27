import Article from "./Article"

function ArticleList({post}) {
    const posts = post.map((article, index) => {
        const elementWithDate = <Article key={index} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}/>;
        const elementWithoutDate = <Article key={index} title={article.title} review={article.preview} minutes={article.minutes}/>;
        return (article.date ? elementWithDate : elementWithoutDate)
    });

    return (<main>
        {posts}
    </main>);

}

export default ArticleList;