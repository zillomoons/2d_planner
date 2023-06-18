import { useCallback } from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import DraggableImage from './DraggableImage';
import './App.css';
import { ItemTypes } from './ItemTypes';


function Board({board, setBoard, setObjectData}) {

  const moveImage = useCallback((id, left, top) => {
    const index = board.findIndex(el => el.id === id);
    if (index > - 1) {
      setBoard(update(board, {[index]: {$merge: {left, top}}}))
    }
  }, [board, setBoard]);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.IMAGE,
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      moveImage(item.id, left, top);
      return;
    }
  }),
    [moveImage]
  )
  return (
    <div ref={drop} className='board'>
      {Object.keys(board).map((key) => { 
        const { left, top, url, id, type } = board[key];
        return <DraggableImage key={key} left={left} id={id} top={top} url={url} onDoubleClick={() => setObjectData({ top, left, id, type })} />
      })}
    </div>
  )
}

export default Board;
