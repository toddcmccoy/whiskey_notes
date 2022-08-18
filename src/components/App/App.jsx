import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Archive from '../Archive/Archive';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AromaNotes from '../AromaNotes/AromaNotes';
import AromaRating from '../AromaRating/AromaRating';
import Dashboard from '../Dashboard/Dashboard';
import FlavorNotes from '../FlavorNotes/FlavorNotes';
import FlavorRating from '../FlavorRating/FlavorRating';
import Education from '../Education/Education';
import EditNote from '../EditNote/EditNote'
import OverallNotes from '../OverallNotes/OverallNotes';
import AppHowToUse from '../AppHowToUse/AppHowToUse';
import NoteReview from '../NoteReview/NoteReview';
import NewWhiskeyNote from '../NewWhiskeyNote/NewWhiskeyNote';
import './App.css';
import AboutPage from '../AboutPage/AboutPage';
import WhiskeyEducation from '../WhiskeyEducation/WhiskeyEducation';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/login */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows How to Use the App page at all times (logged in or not)
            exact
            path="/apphowtouse"
          >
            <AppHowToUse />
          </Route>
          <Route
            // shows How to Use the App page at all times (logged in or not)
            exact
            path="/aboutpage"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the dashboard if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows dashboard else shows LoginPage
            exact
            path="/dashboard"
          >
          <Dashboard />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows new whiskey note else shows LoginPage
            exact
            path="/newwhiskeynote"
          >
          <NewWhiskeyNote />

          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows aroma rating else shows LoginPage
            exact
            path="/aromarating"
          >
            <AromaRating />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows aroma notes else shows LoginPage
            exact
            path="/aromanotes"
          >
            <AromaNotes />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows flavor rating else shows LoginPage
            exact
            path="/flavorrating"
          >
            <FlavorRating />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows flavor notes else shows LoginPage
            exact
            path="/flavornotes"
          >
            <FlavorNotes />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows overall notes else shows LoginPage
            exact
            path="/overallnotes"
          >
            <OverallNotes />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows note review else shows LoginPage
            exact
            path="/notereview"
          >
            <NoteReview />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows note archive else shows LoginPage
            exact
            path="/archive"
          >
            <Archive />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Edit Note page else shows LoginPage
            exact
            path="/editnote"
          >
            <EditNote />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows education else shows LoginPage
            exact
            path="/whiskeyeducation"
          >
            <WhiskeyEducation />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /dashboard page
              <Redirect to="/dashboard" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/dashboard" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LoginPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
