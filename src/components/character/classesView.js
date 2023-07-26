import { useState } from 'react';
import { CLASS_LIST } from '../../consts.js';

const ClassesView = ({ character }) => {

    const [_class, setClass] = useState(null);

    const meetsRequirements = (requirements, character) => {
        for (const [key, value] of Object.entries(requirements)) {
            if (character.attributes.find((attribute) => attribute.attribute === key).val < value) {
                return false;
            }
        }
        return true;
    }

    return (
        <table className='character-info'>
            <tr>
                <td>
                    <div>
                        <h2>Classes</h2>
                        {Object.entries(CLASS_LIST).map(([key, value]) => <div id="key" onClick={() => { setClass({info: value, name: key}) }} className={meetsRequirements(value, character) ? 'selected' : ''}>{key}</div>)}
                    </div>
                </td>
                {_class ?  
                <td>
                    <h2>{_class.name} Minimum Reqirements</h2>
                    {Object.entries(_class.info).map(([key, value]) => <div>{key}: {value}</div>)}
                    <button onClick={()=> {setClass(null)}}>Close requirement view</button>
                </td>: null}

            </tr>
        </table>

    )
}

export default ClassesView