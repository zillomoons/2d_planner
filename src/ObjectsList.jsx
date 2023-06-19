import { memo } from 'react';
import ElementImage from './ElementImage';
import { handleChange } from './utils.js';
import './App.css';

function ObjectsList({imageList, onSubmit, addImageToBoard, setFile}){
  return (
      <div className='objects'>
        <h2>Список объектов</h2>
        <p>Добавьте объект на доску, кликнув по нему мышкой.</p>
          {imageList.map(el => <ElementImage onClick={() => addImageToBoard(el.type)} key={el.type} url={el.url} />)}
          <form onSubmit={onSubmit}>
            <p>Загрузить координаты объекта из файла.</p>
            <input type='file' onChange={(e)=>handleChange(e, setFile)} />
            <button type='submit' >Загрузить</button>
          </form>
        </div>
  )
}

export default ObjectsList