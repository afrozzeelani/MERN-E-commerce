import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import ProfileHead from "../../../images/Head.PNG";
import kasper from "../../../images/logo (2).png";

const About = () => {
  const visitwebsite = () => {
    window.location = "https://www.kasperinfotech.org/";
  };
  return (
    <div className="">
      <Typography className="heading"  style={{ fontSize:"50px" }}>
        About Us
      </Typography>

      <div className="aboutContainer">
        <div className="aboutProfile">
          {/* <Avatar
          style={{ width: "15vmax", height: "15vmax" }}
          src={kasper}
          alt="Founder"
        /> */}
          <img src={kasper} alt="kasper" />
          <h3>(KASPER INFOTECH PVT. LTD.)</h3>
          <Button onClick={visitwebsite} color="primary">
            Visit Our Website
          </Button>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            reiciendis repellendus ad quidem enim, illum nemo eius atque quia
            velit, blanditiis provident! Error odio non quibusdam deserunt sequi
            assumenda, optio laudantium voluptates earum porro nam eligendi
            dolorem ipsam suscipit atque esse dolorum at necessitatibus fugiat?
            Soluta nemo molestiae ullam eum officiis iste, aliquam itaque ab
            sequi optio! Nostrum, cum aspernatur.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            reiciendis repellendus ad quidem enim, illum nemo eius atque quia
            velit, blanditiis provident! Error odio non quibusdam deserunt sequi
            assumenda, optio laudantium voluptates earum porro nam eligendi
            dolorem ipsam suscipit atque esse dolorum at necessitatibus fugiat?
            Soluta nemo molestiae ullam eum officiis iste, aliquam itaque ab
            sequi optio! Nostrum, cum aspernatur.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            reiciendis repellendus ad quidem enim, illum nemo eius atque quia
            velit, blanditiis provident! Error odio non quibusdam deserunt sequi
            assumenda, optio laudantium voluptates earum porro nam eligendi
            dolorem ipsam suscipit atque esse dolorum at necessitatibus fugiat?
            Soluta nemo molestiae ullam eum officiis iste, aliquam itaque ab
            sequi optio! Nostrum, cum aspernatur. stylish choices.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus magnam voluptates mollitia cumque eaque? Soluta
            doloremque laboriosam placeat eius debitis?
          </span>
        </div>
        <div className="aboutDeatils">
          <div className="inspiration">
            <h4>Who We Are?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              minus nesciunt doloremque accusantium error quaerat obcaecati
              impedit quae repellat culpa quo odio. Vel delectus dolore cumque
              ipsam sequi tempore dicta exercitationem voluptate quae blanditiis
              quasi id doloribus accusantium esse, magnam vitae veniam non.
              Animi, quibusdam illum earum eligendi voluptate explicabo nesciunt
              fuga doloremque ullam ipsam, illo porro quas voluptatibus voluptas
              aspernatur obcaecati eaque veritatis sunt incidunt praesentium
              repellendus expedita. Quas.
            </p>
          </div>
          <div className="philosophy">
            <h4>Our Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              reiciendis repellendus ad quidem enim, illum nemo eius atque quia
              velit, blanditiis provident! Error odio non quibusdam deserunt
              sequi assumenda, optio laudantium voluptates earum porro nam
              eligendi dolorem ipsam suscipit atque esse dolorum at
              necessitatibus fugiat? Soluta nemo molestiae ullam eum officiis
              iste, aliquam itaque ab sequi optio! Nostrum, cum aspernatur.
            </p>
          </div>
          <div className="craft">
            <h4>Our Vision</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              reiciendis repellendus ad quidem enim, illum nemo eius atque quia
              velit, blanditiis provident! Error odio non quibusdam deserunt
              sequi assumenda, optio laudantium voluptates earum porro nam
              eligendi dolorem ipsam suscipit atque esse dolorum at
              necessitatibus fugiat? Soluta nemo molestiae ullam eum officiis
              iste, aliquam itaque ab sequi optio! Nostrum, cum aspernatur.
            </p>
          </div>
          <div className="mission">
            <h4>Our Values</h4>
            <p>
              Working towards our goals on a daily basis, we envision ourselves
              as the world's leading brand for Indian Ethnic Wear. Driven by
              customer obsession and technological prowess, we respect the
              divide between modern automation and the irrefutable subtleties of
              hand-made precision. We aspire to stay true to our core values
              whilst focusing on the customer and the artisan in an equal sense.
              Providing a flawless shopping experience through and through,
              we're gradually increasing artisanal employment every single step
              of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
