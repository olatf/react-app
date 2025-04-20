

interface Props{
    title:string
    onClose: ()=>void
}

const Alert = ({title, onClose}: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
     <h2>{title}</h2>

      <button type="button"  className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
