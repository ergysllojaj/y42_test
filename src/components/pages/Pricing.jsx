import React from "react";
import classes from "./Pricing.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import Leftimg from "../../assets/group_left.png";
import Rightimg from "../../assets/group_right.png";

function Pricing() {
  return (
    <>
      <div className={classes.showcase}>
        <img src={Leftimg} alt="" className="img-left" />
        <img src={Rightimg} alt="" className="img-right" />
        <div className="container">
          <div className={classes.showcase__wrapper}>
            <h1 className={classes.showcase__title}>
              Choose the plan that fit your needs!
            </h1>
            <p className={classes.showcase__text}>
              Lorem ipsum dolor sit amet, dolores antiopam argumentum ea pro, eu
              iuvaret legendos sententiae ius, pri dicit oporteat efficiendi an.
            </p>
          </div>

          {/* Cards */}
          <div className={classes.showcase__cards}>
            {/* Card yellow */}
            <div className={classes.showcase__card}>
              <h2 className={classes.showcase__card__title}>Developer</h2>
              <p className={classes.showcase__card__text}>starting at</p>
              <h3 className={classes.showcase__card__price__yellow}>
                49<sup>€</sup>
              </h3>
              <p className={classes.showcase__card__text}>per month</p>
              <Link to="/signup" className="btn__yellow">
                Get Plan
              </Link>

              <ul className={classes.showcase__card__list}>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.yellow__check} />
                  Automatic Product Tours
                </li>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.yellow__check} />
                  GDPR (Highest Level Data Security)
                </li>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.yellow__check} />
                  Developer support
                </li>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.yellow__check} />
                  Unlimited Datasources up to 1GB
                </li>
              </ul>
              <Link
                to="/signup"
                className={classes.showcase__card__second_link}
              >
                See All
              </Link>
            </div>

            {/* Card pink */}
            <div className={classes.showcase__card}>
              <h2 className={classes.showcase__card__title}>Business</h2>
              <p className={classes.showcase__card__text}>starting at</p>
              <h3 className={classes.showcase__card__price__pink}>
                879<sup>€</sup>
              </h3>
              <p className={classes.showcase__card__text}>per month</p>
              <Link to="/signup" className="btn__pink">
                Get Plan
              </Link>

              <ul className={classes.showcase__card__list}>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.pink__check} />
                  Automatic Product Tours
                </li>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.pink__check} />
                  GDPR (Highest Level Data Security)
                </li>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.pink__check} />
                  Developer support
                </li>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.pink__check} />
                  Unlimited Datasources up to 1GB
                </li>
              </ul>
              <Link
                to="/signup"
                className={classes.showcase__card__second_link}
              >
                See All
              </Link>
            </div>

            {/* Card purple */}
            <div className={classes.showcase__card}>
              <h2 className={classes.showcase__card__title}>Developer</h2>
              <p className={classes.showcase__card__text}>starting at</p>
              <h3 className={classes.showcase__card__price__purple}>
                On Request
              </h3>
              <p className={classes.showcase__card__text}>per month</p>
              <Link to="/signup" className="btn__purple">
                Get Plan
              </Link>

              <ul className={classes.showcase__card__list}>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.purple__check} />
                  Automatic Product Tours
                </li>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.purple__check} />
                  GDPR (Highest Level Data Security)
                </li>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.purple__check} />
                  Developer support
                </li>
                <li className={classes.showcase__card__list__item}>
                  <AiOutlineCheck className={classes.purple__check} />
                  Unlimited Datasources up to 1GB
                </li>
              </ul>
              <Link
                to="/signup"
                className={classes.showcase__card__second_link}
              >
                See All
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.cta}>
          <div className="container">
            <div className={classes.cta__wrapper}>
              <div className={classes.cta__content}>
                <h1 className={classes.cta__title}>
                  Grow your early stage startup
                </h1>
                <p className={classes.cta__text}>
                  Startups that are less then 2 years old with up to $5M in
                  total funding receive $50,000 in credits towards the Datos
                  growth plan.
                </p>
              </div>
              <div className={classes.cta__button}>
                <Link to="/signup" className="btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
