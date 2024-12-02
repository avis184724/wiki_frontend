import "./WikiPage.css"
import { useParams } from 'react-router-dom';

function WikiPage() {
  const { searchQuery } = useParams;
  return(
    <div className="container">
      <h1>{ searchQuery }</h1>
      <div className='article-container'>
        
      </div>
    </div>
  ) 
}

export default WikiPage;