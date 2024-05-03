import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/cart';
import Home from './pages/home';
import Header from './components/header/header';
// npm install -D tailwindcss
// npx tailwindcss init
// 콘텐트 배열에 "./src/**/*.{js,jsx,ts,tsx}", 추가
// index.css 에 @tailwind base; @tailwind components; @tailwind utilities; 추가

// npm install @reduxjs/toolkit react-redux react-icons react-router-dom react-loader-spinner 설치
// index.js에 라우터 추가

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
