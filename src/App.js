import { useCallback, useState} from 'react';
import './App.css';
import { ATTRIBUTE_LIST, SKILL_LIST } from './consts.js';
import Character from './components/character';

const createCharacterSkills = (skills) => {
  return skills.map((skill) => ({ skill: skill, val: 0 }));
}

const createCharacterAttributes = (attributes) => {
  return attributes.map((attribute) => ({ attribute: attribute, val: 10, modifier: 0 }));
}

function App() {
  const [characterList, setCharacterList] = useState([]);
  
  const addCharacter = useCallback(() => {
    setCharacterList((characterList) => [...characterList, { name: `Character ${characterList.length + 1}`, class: null, skills: createCharacterSkills(SKILL_LIST), attributes: createCharacterAttributes(ATTRIBUTE_LIST) }])
  }, [setCharacterList]);

  const resetAllCharacters = useCallback(() => {
    setCharacterList((characterList) => characterList.map((character) => ({ ...character, skills: createCharacterSkills(SKILL_LIST), attributes: createCharacterAttributes(ATTRIBUTE_LIST) })))
  }, [setCharacterList])

  const clearAllCharacters = useCallback(() => {setCharacterList([])}, [setCharacterList])

  const saveAllCharacters = useCallback(() => {
    //TODO:
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <button onClick={addCharacter}>Add New Character</button>
        <button onClick={resetAllCharacters}>Reset All Characters</button>
        <button onClick={clearAllCharacters}>Clear All Characters</button>
        <button onClick={saveAllCharacters}>Save All Characters</button>
        {characterList.map((character, index) => <Character key={index} character={character} />)}
      </section>
    </div>
  );
}

export default App;
