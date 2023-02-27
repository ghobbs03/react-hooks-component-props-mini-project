import Article from "./Article"

function ArticleList({posts}) {
    let allPosts = posts;


    if (posts) {
        allPosts = posts.map((article) => {
            const elementWithDate = <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}/>;
            const elementWithoutDate = <Article key={article.id} title={article.title} preview={article.preview} minutes={article.minutes}/>;
            return (article.date ? elementWithDate : elementWithoutDate)
        });
    }

    
    return (<main>
        {posts ? allPosts : posts}
    </main>);

}

export default ArticleList;