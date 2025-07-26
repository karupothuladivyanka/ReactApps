//single page applictions
import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>Welcome to SPA</h1>
      <BrowserRouter>
      <div>
        <nav>
          <Link to='/'>Home</Link> |
          <Link to='/About'>About</Link> |
          <Link to='/Contact'>Contact</Link> |
          <Link to='/FlowersGallery'>FlowersGallery</Link> |
          <Link to='/FruitsGallery'>FruitsGallery</Link> |
          <Link to='/Signin'>Signin</Link> |
          <Link to='/Signup'>Signup</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/FlowersGallery" element={<FlowersGallery/>}></Route>
          <Route path="/FruitsGallery" element={<FruitsGallery/>}></Route>
          <Route path="/Signin" element={<Signin/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}
function Home() {
  return (
    <div>
      <dl>
        <dt>
          <b>Welcome to FandF - Flowers and Fruits</b>
        </dt>
        <dt>Fresh Flowers</dt>
        <dd>Beautiful and freshly picked flowers from our gardens.</dd>
        <dt>Seasonal Fruits</dt>
        <dd>juicy and sweet fruits delivered directly from farms.</dd>
      </dl>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About Us</h1>
        <p>
            FandF is dedicated to providing the best quality flowers and fruits directly from our farms. We take pride our produce originically and sustainably.
            <br/><br/>
            Our flowers are growns with love and care, ensuring each bouquet is vibrant and fresh. We offer a wide variety of floral arrangements suitable for all occasions.
            <br/><br/>
            Fruits at FandF are handpicked to ensure ripeness and taste. Our seasonal offerings include mangoes, apples, bananas, and many more fresh-from-the-farm options. 
        </p>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
        <p>
            <b>Office Address: </b>123 Flower Street, Blossom City<br/>
            <br/>
            <b>Farm Address: </b>Greenfields, Countryside
        </p>
    </div>
  );
}
function FlowersGallery() {
  return (
    <div>
      <strong>Our Flowers</strong>
        <ol type="1">
            <li>Rose</li>
            <p>
                <img src="images/rose1.jpg" alt="rose1" height="100px" width="100px"/>
                <img src="images/rose2.jpg" alt="rose2" height="100px" width="100px"/>
                <img src="images/rose3.jpg" alt="rose3" height="100px" width="100px"/>
            </p>
            <li>Lotus</li>
             <p>
                <img src="images/lotus1.jpg" alt="lotus1" height="100px" width="100px"/>
                <img src="images/lotus2.jpg" alt="lotus1" height="100px" width="100px"/>
                <img src="images/lotus3.jpg" alt="lotus1" height="100px" width="100px"/>
            </p>
            <li>Sunflower</li>
             <p>
                <img src="images/s1.jpg" alt="s1" height="100px" width="100px"/>
                <img src="images/s2.jpg" alt="s2" height="100px" width="100px"/>
                <img src="images/s3.jpg" alt="s3" height="100px" width="100px"/>
            </p>
        </ol>
    </div>
  );
}
function FruitsGallery() {
  return (
    <div>
      <strong>Our Fruits</strong>
        <ol type="1">
            <li>Apple</li>
            <p>
                <img src="images/apple1.jpg" alt="apple1" height="100px" width="100px"/>
            </p>
            <li>Mango</li>
             <p>
                <img src="images/mango1.jpg" alt="mango1" height="100px" width="100px"/>
            </p>
            <li>Banana</li>
             <p>
                <img src="images/banana1.jpg" alt="banana1" height="100px" width="100px"/>
            </p>
        </ol>
    </div>
  );
}
function Signin() {
  return (
    <div>
      <form name="f1" action="https://www.dummy.com" method="get">
        <table border="1px" align="center" cellpadding="10px">
            <center>
            <h1><b>Signin Form</b></h1>
            </center>
            <tr>
                <td>
                    <lable>User ID:</lable>
                </td>
                <td>
                    <input type="text" id="id1" name="n1" required/>
                </td>
            </tr>
            <tr>
                <td>
                    <lable>Password:</lable>
                </td>
                <td>
                    <input type="password" id="id2" name="n2" required/>
                </td> 
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" value="Signin"/>
                </td>
            </tr>
            </table>
            </form>
    </div>
  );
}
function Signup() {
  return (
    <div>
      <form name="f1" action="https://www.dummy.com" method="get">
        <table border="1px" align="center" cellpadding="10px">
            <center>
            <h1><b>Signup Form</b></h1>
            </center>
            <tr>
                <td>
                    <lable>User ID:</lable>
                </td>
                <td>
                    <input type="text" id="id1" name="n1" required/>
                </td>
            </tr>
            <tr>
                <td>
                    <lable>Password:</lable>
                </td>
                <td>
                    <input type="password" id="id2" name="n2" required/>
                </td>
            </tr>
            <tr>
                <td>
                    <lable>Address</lable>
                </td>
                <td>
                <textarea rows="5" cols="20" required>

                </textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <lable>Phone:</lable>
                </td>
                <td>
                  <input type="tel" id="id3" name="n3" required/>
                </td>
            </tr>
             <tr>
                <td>
                  <lable>Date of Order:</lable>
                </td>
                <td>
                    <input type="date" id="id4" name="n4" required/>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                  <input type="submit" value="Signup" required/>
                </td>
            </tr>
            </table>
            </form>
    </div>
  );
}

export default App;