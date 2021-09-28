import './style/scss/style.scss'

import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import HomePgae from './pages/home-page';
import TeamPage from './pages/team-page';
import EventsPage from './pages/events-page';
import ArticlesPage from './pages/articles-page';
import ContactPage from './pages/contact-page';

import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/events">
          <EventsPage />
        </Route>
        <Route path="/articles">
          <ArticlesPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          <HomePgae />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
