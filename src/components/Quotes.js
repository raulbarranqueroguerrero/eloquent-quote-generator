import React, {useState, useEffect} from 'react'
import twitterIcon from '../twitter.svg'
import githubIcon from '../github.svg'
import {readableColors} from './readableColors'

const Quotes = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [hex, setHex] = useState('#82FFF3')

    const randomHex = () => {
        const values = Object.values(readableColors)
        const randomColor = '#' + values[parseInt(Math.random()* values.length)]
        return randomColor
    }

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes
                let randomNumber = Math.floor(Math.random() * dataQuotes.length)
                let randomQuote = dataQuotes[randomNumber]
                setQuote(randomQuote.quote)
                setAuthor(randomQuote.author)
            })
    }

    useEffect(() => {
        getQuote()
        randomHex()
    }, [])

    function handleClick() {
        getQuote()
        setHex(randomHex)
    }
    
    return (
        <div id="app" style={{"--app-background": `${hex}`}}>
            <div id="quote-box">
                 <div id="text">
                    <p>{quote}</p>
                    <div id="author">{author}</div>
                    <div tumblrIconid="buttons">
                        <div className="social-media">
                            <a    
                                target='_blanck'   
                                href={`https://twitter.com/intent/tweet?text=${quote}-${author}`}
                                id="tweet-quote">
                                <span>
                                    <img src={twitterIcon} alt=""/>
                                </span>
                            </a>
                            <a 
                                target='_blanck' 
                                href="https://github.com/raulbarranqueroguerrero/eloquent-quote-generator" id="tumblr-quote">
                                <span>
                                    <img src={githubIcon} alt=""/>
                                </span>
                            </a>
                            <button onClick={handleClick} id="new-quote">New Quote</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quotes