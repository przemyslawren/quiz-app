import React, { useState } from 'react';
import './Main.scss';
import MassiveButton from '../buttons/MassiveButton';
import FindCapital from './findCapital/FindCapital';
import Quiz from './quiz/Quiz';

enum AppState {
  LANDING_PAGE = 'LandingPage',
  FIND_CAPITAL = 'FindCapital',
  QUIZ = 'Quiz',
}

const Main = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LANDING_PAGE);

  return (
    <div className="main">
      {appState === AppState.LANDING_PAGE && (
        <>
          <MassiveButton
            title="Find a capital"
            onClick={() => setAppState(AppState.FIND_CAPITAL)}
          />
          <MassiveButton
            title="Capitals quiz"
            onClick={() => setAppState(AppState.QUIZ)}
          />
        </>
      )}
      {appState === AppState.FIND_CAPITAL && <FindCapital />}
      {appState === AppState.QUIZ && <Quiz />}
    </div>
  );
};

export default Main;
