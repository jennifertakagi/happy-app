import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import '../assets/styles/pages/landing.css';

import logoIcon from '../assets/icons/logo.svg';

function Landing () {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoIcon} alt="Happy App Logo"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Florianópolis</strong>
          <span>Santa Catarina</span>
        </div>

        <Link to="/orphanages" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  )
}

export default Landing;