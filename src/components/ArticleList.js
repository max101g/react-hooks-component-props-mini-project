import React from "react";
import Article from "./Article";

function ArticleList () {
    return (
        <main>
            <Article 
            date =  "July 13, 2020" 
            title = "The WET Codebase" 
            preview = "Come waste your time with me"/>
            <Article
            date =  "January 11, 2020" 
            title = "Goodbye, Clean Code" 
            preview = "Let clean code guide you. Then let it go"
            />
            <Article
            date =  "January 1, 2020" 
            title = "My Decade in Review" 
            preview = "A personal Reflection"
            />
        </main>
    )
}

export default ArticleList