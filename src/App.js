import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import WikiPage from './WikiPage';
import { useEffect, useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [ main, setMain ] = useState(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(searchQuery);
      navigate(`/wiki/${searchQuery}`);
    }
  };

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/tetris/main`);
        if (response.ok) {
          const myData = await response.json();
          console.log(myData)
          setMain(myData);
        }
      } catch (error) {
        console.log("데이터를 가져오는 중 오류가 발생했습니다.");
      }
    };
    fetchData();
  },[])

  return (
    <div className='container'>
      <header>
        <h1>TETRIS DPC Wiki</h1>
        
        <div className='search-container'>
          <div className='search-icon'>🔍</div>
          <input
            type='text'
            className='search-input'
            placeholder='검색하기'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          ></input>
        </div>
      </header>
      <main>
        <p>{main.Demerit}</p>
        <Routes>
          <Route path='/wiki/:searchQuery' element={<WikiPage></WikiPage>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;