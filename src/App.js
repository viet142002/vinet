import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import { DefaultLayout, OnlyFooterLayout } from './Components/Layouts';
import { Fragment } from 'react';
import { ScrollProvider } from './ScrollContext';

function App() {
  return (
    <ScrollProvider>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = DefaultLayout;

              if (route.layout === 'OnlyFooterLayout') {
                Layout = OnlyFooterLayout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              const Page = route.component;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </ScrollProvider>
  );
}

export default App;
