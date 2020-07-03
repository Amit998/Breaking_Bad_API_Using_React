import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'


import './App.css';

const App = () => {
  const [items,setItems]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState('')

  useEffect(()=>{
    const fetcItems = async()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);
      setItems(result.data)
      setIsLoading(false)
      

    }
    fetcItems()

  },[query])


  return (
    <div className="container">
    <Header></Header>
    <Search getQuery={(q) => setQuery(q) }></Search>
    <CharacterGrid isLoading={isLoading} items={items}></CharacterGrid>
    
      
    </div>
  );
}

export default App;
