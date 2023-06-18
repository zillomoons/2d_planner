

function ElementImage(props) {
  const { url, onClick} = props;
  return (
    <img src={url} alt='table' width={100} onClick={onClick} className='addItem' />
  )
}

export default ElementImage