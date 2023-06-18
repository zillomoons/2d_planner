import { memo } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';


const styles = {
  cursor: 'move',
  padding: '0.5rem 1rem',
  position: 'absolute',
}


const DraggableImage = memo(function DraggableImage({ id, url, left, top, onDoubleClick }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.IMAGE,
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }), [id, left, top]);

  if (isDragging) {
    return <div ref={drag}/>
  }
  return  <img onDoubleClick={onDoubleClick} ref={drag} src={url} alt='table' width={100} style={{ ...styles, left, top }} />
});

export default DraggableImage;