interface DeleteModalProps {
  handleClick: () => void;
  onDelete?: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onDelete, handleClick }) => {
  const handleDelete = () => {
    onDelete();
    handleClick();
  };

  return (
    <div
      data-lenis-prevent={false}
      className="w-full h-screen top-0 left-0 fixed z-[9999] bg-[#0D1816]/60 transition-all backdrop-blur-md duration-300"
    >
      <div
        className={`bg-white w-[450px] flex flex-col gap-8 rounded-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-black p-6`}
      >
        <h4 className={`text-3xl uppercase font-medium`}>
          Do you really want to delete this post?
        </h4>
        <div className={`flex gap-6`}>
          <button
            onClick={handleClick}
            className={`text-lg p-2 rounded-2xl border border-black hover:bg-black hover:text-white duration-300`}
          >
            Cancel
          </button>
          <button
            className={`text-lg py-2 px-4 rounded-2xl bg-red-600 hover:bg-red-500 transition-colors duration-300 text-white`}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
