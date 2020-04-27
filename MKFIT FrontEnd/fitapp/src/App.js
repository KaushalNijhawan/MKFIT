import React from 'react';
import logo from './logo.svg';
import './App.css';
import FitAppRouting from './FitApp-Routing';
import BMISection from './Home/BMIInfoSection';
import DietBasedCalorie from './DietPlans/DietBasedCalorie';
import GainDiet from './DietPlans/GainDiet';

function App() {
  return (
   <FitAppRouting/>
   //<GainDiet/>
   );
}

export default App;
