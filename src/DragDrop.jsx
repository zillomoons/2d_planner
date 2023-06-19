
import { useCallback, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Board from './Board';
import ObjectsList from './ObjectsList';
import CoordinatesOutput from './CoordinatesOutput';



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

  
  const addImageToBoard = function (type){
    const image = imageList.filter(el => el.type === type)[0];
    setBoard((board) => [...board, { ...image, id: uuidv4(), left: 0, top: 80 }]);
  }
  
  const onSubmit = function (e) {
    e.preventDefault();
    const fileData = JSON.parse(file);
    const url = imageList.filter(image => image.type === fileData.type)[0].url;
    setBoard([...board, { ...fileData, url }])
  };

  return (
    <>
      <h1>2D-Планировщик</h1>
    <div className='container'> 
        <Board board={board} setBoard={setBoard} setObjectData={setObjectData} />
        <ObjectsList imageList={imageList} onSubmit={onSubmit} addImageToBoard={addImageToBoard} setFile={setFile} />
        <CoordinatesOutput objectData={objectData} />
      </div>
      </>
  )
}

export default DragDrop;


