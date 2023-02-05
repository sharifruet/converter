import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
         <style jsx global>
			{`
			  .length {
				  align-items: center;
				  
				}

				.length__container {
				  display: flex;
				  flex-direction: row;
				  justify-content: center;
				}

				.length__input {
				  font-size: 5em;
				  text-align: center;
				  margin: 10px;
				}
				.input{
					max-width:500px;
				}
				.unit{
					max-width:300px;
				}

				.length__converted {
				  margin-top: 10px;
				  display:flex;
				  flex-direction:column;
				  align-items: center;
				justify-content: center;
				  
				}
				
				.item {
				  width:500px;
				  border: 1px solid silver;
				  margin: 10px;
				  padding: 1px 1px 1px 1px;
				  text-align:right;
				  font-size: 2em;
				  display:flex;
				  flex-direction: row;
				}
				.content{
					padding: 5px;
					width:400px;
				}
				.label{
					background-color:silver;
					padding: 5px;
					width:100px;
					text-align:left;
				}
			`}
		  </style>
      </>
    );
  }
}

export default MyApp;
