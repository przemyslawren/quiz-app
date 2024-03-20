import React, { useState } from 'react';
import './Main.scss';
import StandardButton from '../buttons/StandardButton';
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
      {appState !== AppState.LANDING_PAGE && (
        <div style={{ position: 'absolute', left: 50, top: 50 }}>
          <StandardButton
            title="Go Back"
            onClick={() => setAppState(AppState.LANDING_PAGE)}
          />
        </div>
      )}
      {appState === AppState.LANDING_PAGE && (
        <>
          <StandardButton
            title="Find a capital"
            onClick={() => setAppState(AppState.FIND_CAPITAL)}
            isMassive
          />
          <StandardButton
            title="Capitals quiz"
            onClick={() => setAppState(AppState.QUIZ)}
            isMassive
          />
        </>
      )}
      {appState === AppState.FIND_CAPITAL && <FindCapital />}
      {appState === AppState.QUIZ && <Quiz />}
    </div>
  );
};

export default Main;
