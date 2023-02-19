import ClipLoader from 'react-spinners/ClipLoader'

const PrimaryBtn = ({ text, handleClick, disabled }) => {
  return (
    <button disabled={disabled} style={{background: disabled ? '#10844d' : '#10844d'}} className='primary-btn' onClick={handleClick}>
        {disabled ? <ClipLoader color={'#fff'} size={20} /> : text }
    </button>
  )
}

export default PrimaryBtn