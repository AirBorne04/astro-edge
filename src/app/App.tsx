import { isServer } from "solid-js/web";
import { Router } from "@solidjs/router";
import { AppRoutes } from "./AppRoutes";

export type AppProps = {
  path: string;
};

export const App = (props: AppProps) => {

  let routerProps = {};

  if (isServer) {
    routerProps = {
      url: props.path
    };
  }

  return (
    <Router {...routerProps}>
      <AppInternal />
    </Router>
  );
};

export const AppInternal = () => {
  return (
    <div>
      <div id="menu" />

      <main class="flex flex-col items-center">
        <AppRoutes />
      </main>
    </div>
  );
};