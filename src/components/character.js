import AttributesView from './character/attributesView'
import SkillsView from './character/skillsView';
import ClassesView from './character/classesView';

const Character = ({ character }) => {
    return (
        <div>
            <h1>{character.name}</h1>
            <table id="character-info">
                <tr>
                    <td>
                        <AttributesView attributes={character.attributes} />
                    </td>
                    <td>
                        <ClassesView character={character} />
                    </td>
                    <td>
                        <SkillsView skills={character.skills} />
                    </td>
                </tr>
            </table>

        </div>
    );
}

export default Character