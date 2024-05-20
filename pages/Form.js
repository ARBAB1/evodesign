'use client'
import React, {useState} from "react";
import Header from "../src/app/components/Header/index";
import style from "./form.module.css";
import Logo from "../src/app/assets/evoloog.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ReCAPTCHA from 'react-google-recaptcha';
import Footer from "@/src/app/components/footer/footer";
import Link from "next/link";


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Redesign my app or website',
    budget: '',
    description: ''
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData, captchaValue })
    });

    if (res.ok) {
      alert('Form submitted successfully');
    } else {
      alert('Form submission failed');
    }
  };


  return (
    <>
      <div className="container">
        <div className="row"> 
        <div className={`col-12 ${style.title}`}>
          <Link href={'./Home'}>
             <Image src={Logo} style={{ width: 100, height: 100 }} />
          </Link>
        </div>
        </div>
      </div>
    <div className={`container ${style.container}`}>
      <div className="row">
        
        <div className={`col-12  ${style.Head}`}>
          <p style={{ fontSize: 35, fontWeight: "normal", color: "#444444" }}>
            Ready to collaborate?
          </p>
          <h1 style={{ fontSize: 70, fontWeight: "500", color: "#444444" }}>
            Let's <span style={{ color: "#ce5137" }}>Talk!</span>{" "}
          </h1>
        </div>
      </div>
      <form>
        <div className="row">
          <div className={`col-lg-6`}>
            <div className="form-group">
              <label
                style={{ color: "#444444", fontSize: 24, fontWeight: "normal" }}
              >
                What’s your name?
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Your Full Name"
                style={{
                  borderTop: 0,
                  borderRight: 0,
                  borderLeft: 0,
                  fontSize: 20,
                }}
              />
            </div>
          </div>
          <div className={`col-lg-6`}>
            <div className="form-group">
              <label
                style={{ color: "#444444", fontSize: 24, fontWeight: "normal" }}
              >
                What’s your email?
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Your Email"
                style={{
                  borderTop: 0,
                  borderRight: 0,
                  borderLeft: 0,
                  fontSize: 20,
                }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className={`col-lg-6`}>
            <div className="form-group">
              <label
                style={{ color: "#444444", fontSize: 24, fontWeight: "normal" }}
              >
                What’s services are you looking for?
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                style={{
                  borderTop: 0,
                  borderRight: 0,
                  borderLeft: 0,
                  fontSize: 16,
                }}
              >
                <option selected>Redesign My App & Website</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              {/* <input type='text' className='form-control' placeholder='Type Your Full Name' style={{borderTop:0,borderRight:0, borderLeft:0, fontSize:25}} /> */}
            </div>
          </div>
          <div className={`col-lg-6`}>
            <div className="form-group">
              <label
                style={{ color: "#444444", fontSize: 24, fontWeight: "normal" }}
              >
                What’s your budget for this project?
              </label>
              <div
                style={{ display: "flex", alignItems: "center", padding: 10 }}
              >
                <span className={style.PriceBx}>$ 1k</span>
                <span className={style.PriceBx}>$ 2k - 5k</span>
                <span className={style.PriceBx}>$ 5k - 10k</span>
                <span className={style.PriceBx}>Can't say </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="form-group">
              <label
                style={{ color: "#444444", fontSize: 24, fontWeight: "normal" }}
              >
                Tell us about your project
              </label>
              <textarea
                className="form-control"
                rows="5"
                style={{ borderTop: 0, borderLeft: 0, fontSize: 16 }}
                placeholder="Type your detailed project  description"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className={style.CheckBox}>
                  <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleCaptchaChange}
              />
            </div>
            <button type="submit" className={style.FormButton}>SUBMIT FORM</button>
          </div>
        </div>
      </form>
    </div>
      <div className="mt-5">
      <Footer />
      </div>
    </>

  );
};

export default Form;
