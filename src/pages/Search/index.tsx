import React from 'react';
import Header from '../Header';
import Card from '../Cards/Card';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import api from '../../api/api';

const Search = () =>{

    const {wordSearch} = useParams()

    const [word, setWord] = useState(wordSearch)
    const [search, setSearch] = useState([])
    const [form,setForm] = useState([])

    useEffect(() =>{
        if(word){
            api.get(`/posts?q=${word}`)
            .then((response) =>{
                setSearch(response.data)
            })
        }

    }, [word])

    function onChange(event:any){

        const{value, name} = event.target

         // @ts-ignore
        setForm({...form, [name]:value})

    }

    function handleSearch(event:any){
        event.preventDefault()

        // @ts-ignore
        setWord(form.search)


    }


    return(
        <div>
            <Header/>
            <div className="card-section">
            <div className="container">
            <form onSubmit={handleSearch}>
                <input type="text" name="search" placeholder='Procurar matéria...' onChange={onChange}/>
                <button>Buscar</button>
            </form>
            <h3>{search.length} resultados sobre "{word}"</h3>
            <div className="cards">
              {
                search.map((item) =>{
                    // @ts-ignore
                    return <Card key ={item.id} content={item}/>
                })
              }
            </div>
        </div>
     </div>
    


        </div>
    )
}


export default Search