import React from 'react'
import Header from './header'
import Footer from './Footer'
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';


const Layout = (props) => {
    return (
        <>
    
            <Global
                styles={css`
                    html{
                        font-size:62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                     box-sizing: inherit;
                    }
                    body{
                        font-size:18px;
                        font-size:1.8rem;
                        line-height:1.5;
                    }
                    h1, h2, h3 {
                        margin:0;
                        line-height:1.5;
                    }
                    h1, h2 {
                        font-family:'Roboto', serif;
                    }
                    h1{
                        font-size:4rem;
                        margin:0%;

                        @media(min-width:992px){
                            font-size:5.8rem;
                        }
                    }
                    p{
                        font-size:2rem;
                        margin:0%;

                        @media(min-width:992px){
                            font-size:2.6rem;
                        }
                    }
                    h3{
                        font-family:'PT Sans', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin:0;
                        padding:0;
                    }
                `}
            />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header />
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout
