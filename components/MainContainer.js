import React, {Component} from 'react';
import A from "./A";
import Head from "next/head";

function MainContainer ({children, keywords}) {
        return (
            <>
                <Head>
                    <meta keywords={"server render, next.js, react" + keywords}/>
                    <title>Home Project</title>
                </Head>
                <div className="navBar">
                    <A href={"/"} text="Main Page" />
                    <A href={"/users"} text="Users" />
                </div>
                <div>{children}</div>
                <style jsx>{`
                  .navBar{background: orange; padding: 15px}
                `}</style>
            </>
        );
}

export default MainContainer;