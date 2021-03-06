// @flow

import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Dashboard from "~/components/Dashboard";
import GameManager from "~/components/GameManager";
import CharacterManager from "~/components/CharacterManager";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/game/:gameId?" exact component={GameManager} />
        <Route
          path="/game/:gameId/character/:characterId?"
          exact
          component={CharacterManager}
        />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
}
