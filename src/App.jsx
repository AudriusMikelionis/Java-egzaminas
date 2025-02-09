import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import { Layout } from './Layout';

import './App.css';
import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { SecuredRoute } from './auth/SecuredRoute';
import { PageNotFound } from './pages/PageNotFound';
import { Unauthorized } from './pages/Unauthorized';

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/test"
            element={
              <SecuredRoute>
                <div>Secured</div>
              </SecuredRoute>
            }
          />
        </Routes>
      </Layout>
      

    </AuthProvider>
  );
};

export default App;
