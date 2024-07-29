export default function CloseButton(props) {
  return (
    <>
      <div className="h-[90%] relative right-[25px] bottom-[25px]">
        <button
          onClick={props.closeUserModal}
          className="w-[40px] h-[40px] font-bold border-4 border-gray-700 rounded-full bg-white hover:bg-peach"
        >
          <i class="fa-solid fa-xmark fa-xl"></i>
        </button>
      </div>
    </>
  );
}
