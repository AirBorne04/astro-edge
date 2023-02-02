import { ErrorBoundary, lazy } from "solid-js";
import { useRoutes, Outlet, A, Params, useParams } from "@solidjs/router";

export const routeConfig = [{
  path: "/app",
  component: lazy(() => import("./pages/Home").then(
    (data: any) => new Promise(
      (resolve) => {
        setTimeout(() => resolve(data), 1000);
      }
    )
  )),
}, {
  path: "/app/users",
  component: lazy(() => import("./pages/User")),
}, {
  path: "/app/users/:id",
  component: ({params}: {params: Params}) => {
    return <div class="user">User {useParams().id}</div>;
  }
}];

export const AppRoutes = () => {
  
  const Routes = useRoutes(routeConfig);

  return (
    <ErrorBoundary fallback={(error: any) => <div>Error {error.message}</div>}>
      <Routes />

      <Outlet />

      <ul>
        <li><A href="/app">Home</A></li>
        <li><A href="/app/users">Users</A></li>
        <li><A href="/app/users/1">User 1</A></li>
      </ul>
      
    </ErrorBoundary>  
  );
};