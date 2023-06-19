import { memo } from 'react'
import './App.css';
import { exportObjectInfo } from './utils';

function CoordinatesOutput({ objectData }) {
  function handleExport() {
    if (objectData.id) {
      exportObjectInfo(objectData);
    }
  }
  return (
     <div className='description'>
          <p>Дважды кликнув по объекту можно получить его координаты.</p>
          <h3>Координаты выбранного объекта:</h3>
          <p>OffsetTop: {objectData.top} ---- OffsetLeft: {objectData.left}</p>
          <button onClick={handleExport}>Сохранить</button>
        </div>
  )
}

export default CoordinatesOutput