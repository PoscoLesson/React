import { useState } from 'react';

function HomePage() {
  return <h1>Home Page</h1>;
}

function LoginPage() {
  return <h1>Login Page</h1>;
}

function ProfilePage() {
  return <h1>Profile Page</h1>;
}

function ErrorPage() {
  return <h1>Error! Page not found.</h1>;
}

export default function CurrentPage() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'login':
        return <LoginPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <ErrorPage />;
    }
  };

  return (
    <div>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('login')}>Login</button>
      <button onClick={() => setPage('profile')}>Profile</button>
      <button onClick={() => setPage('error')}>Error</button>

      {renderPage()}
    </div>
  );
}
