import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about company" style={{background: "var(--darkGrey)"}}></img>
                        </div>
               <div className="col-10 mx-auto col-md-6 my-3">
               <Title title='about us' ></Title>
               <p className="text-lead text-muted my-3">
               Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6      

PS C:\Users\Acer\Desktop\tech-store> npm start

Compiled with warnings.
Compiled with warnings.
Compiled with warnings.

./src/pages/AboutPage.js
Failed to compile.

./src/components/AboutPage/Info.js
  Line 21:13:  Parsing error: Expected corresponding JSX closing tag fo
Compiled with warnings.

./src/components/SideCart.js
  Line 8:38:  'cart' is assigned a value but never used  no-unused-vars
Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.




               </p>
               <button className="main-link" type="button" style={{marginTop: "2rem"}}>More Info</button> 
                        </div>
                    </div>


                


            </div>
            
        </section>
    );
}
