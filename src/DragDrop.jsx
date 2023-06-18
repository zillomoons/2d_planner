
import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Board from './Board';
import ElementImage from './ElementImage';
import { exportObjectInfo, handleChange } from './utils';

const imageList = [
  {
    type: 'round-table-1',
    url: './img/round_table1.png'
  },
  {
    type: 'round-table-2',
    url: './img/round_table2.png'
  },
  {
    type: 'square-table',
    url: './img/square_table.png'
  },
  {
    type: 'rect-table',
    url: './img/rect_table.png'
  },
 
]


function DragDrop() {
  const [board, setBoard] = useState([]);
  const [objectData, setObjectData] = useState({ top: 0, left: 0, id: '', type: '' }); // coordinates and id of choosen object
  const [file, setFile] = useState();

  
  const addImageToBoard = (type) => {
    const image = imageList.filter(el => el.type === type)[0];
    setBoard((board) => [...board, { ...image, id: uuidv4(), left: 30, top: 30 }]);
  }

  function handleExport() {
    if (objectData.id) {
      exportObjectInfo(objectData);
    }
  }

  
  function onSubmit(e) {
    e.preventDefault();
    const fileData = JSON.parse(file);
    const url = imageList.filter(image => image.type === fileData.type)[0].url;
    setBoard([...board, { ...fileData, url }])
  }
  
  

  return (
  <>
    <div className='container'> 
      <Board board={board} setBoard={setBoard} setObjectData={setObjectData} />
      <div className='objects'>
        <h2>Список объектов</h2>
        <p>Добавьте объект на доску, кликнув по нему.</p>
          {imageList.map(el => <ElementImage onClick={() => addImageToBoard(el.type)} key={el.type} url={el.url} />)}
          <form onSubmit={onSubmit}>
            <p>Загрузить координаты объекта из файла.</p>
            <input type='file' onChange={(e)=>handleChange(e, setFile)} />
            <button type='submit' >Загрузить</button>
          </form>
        </div>
        <div>
          <p>Дважды кликнув по объекту можно получить координаты объекта.</p>
          <h3>Координаты выбранного объекта:</h3>
          <p>OffsetTop: {objectData.top} ---- OffsetLeft: {objectData.left}</p>
          <button onClick={handleExport}>Сохранить</button>
        </div>
      </div>
      </>
  )
}

export default DragDrop;


