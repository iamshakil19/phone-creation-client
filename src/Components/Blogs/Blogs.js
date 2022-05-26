import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Blogs = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <h2 className='text-2xl font-bold text-center my-5'>QNA</h2>
            <div className='px-5 md:px-14 lg:px-60 my-10'>
                <div tabindex="0" class="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        How will you improve the performance of a React Application?
                    </div>
                    <div class="collapse-content">
                        <p>When a user enters the website, he only sees the things on the home page, he doesn't need anything else.  But if we load all the code then it takes a lot of time to load everything in front of the user. So the solution is to load the code according to the user's demand or when the user enters the website, he immediately loads the code on the homepage and slowly loads the rest of the code secretly.</p>
                    </div>
                </div>
                <div tabindex="0" class="mb-4  collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div class="collapse-content">
                        <p>At one time states were lined up globally for state management but React 16 came up with a thing called context api, through which states can be shared between any child component except a global state.  Without drilling any kind of props.  It has made state management much easier.</p>
                    </div>
                </div>
                <div tabindex="0" class=" mb-4  collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div class="collapse-content">
                        <p>Prototype is a very important topic of java script.  Because java script runs through many hidden features.  For example, the name of a function is name and there is an object inside that function.  Now if I give name.toString () then who does the work of this toString.  This is what prototype inheritance does. But prototype inheritance is, suppose there are 2 functions, they have 2 types of values, now I want to make 2 connections.  To do this, they need to be connected through a call method and put into a prototype.  ex: man.prototype.  Then you have to do it this way to create a new object.  new.prototype = Object.create (Man.prototype)</p>
                    </div>
                </div>
                <div tabindex="0" class=" mb-4  collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Why you do not set the state directly in React.
                    </div>
                    <div class="collapse-content">
                        <p>If we set the state directly then we have no control over that state.  And if you use it elsewhere, the same data will remain which is not correct.  So we can put data in setState without directly replacing the state.  Then I can use it in different places and if necessary I can also set new data.</p>
                    </div>
                </div>
                <div tabindex="0" class=" mb-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </div>
                    <div class="collapse-content">
                        <p>
                            const products = | name: "Realme",
                            description: "Value for money",
                            price:"15000" |

                            const searchText = "Apple"
                            const result = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
                            console.log(result);
                        </p>
                    </div>
                </div>
                <div tabindex="0" class="mb-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        What is a unit test? Why should write unit tests?
                    </div>
                    <div class="collapse-content">
                        <p>Unit testing means
                            Defects are captured in very early phase  Build gives the quality of the build as well  Build Means whatever version is comming for tedting, a part of application. Where the code is reusable, it should be tested more so that it can be reused by making slight changes if needed in any project ahead.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;