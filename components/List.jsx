import ItemList from './ItemList'
import style from './list.module.css';

export default function List({list, deleteDoList, onChecked, deleteDone}){
    return <fieldset className={style.fieldset}>
        <legend>Список дел</legend>
        {list.length > 0 ? (
            <ol>
            <ItemList list={list} deleteDoList={deleteDoList} onChecked={onChecked}/>
            <button className={style.delete} onClick={()=>deleteDone()}> Удалить выполненное</button> 
            </ol>) : (<h3>Список пуст!</h3>)
        }
    </fieldset>;
}