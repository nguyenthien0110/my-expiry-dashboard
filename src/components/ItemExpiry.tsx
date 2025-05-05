import { CiEdit } from "react-icons/ci";

function ItemExpiry() {
  return (
    <>
      <div className="h-24 w-96 bg-amber-300 border rounded-2xl relative">
        <div className="absolute h-10 w-10 bg-white rounded-3xl -top-4 -right-4 flex items-center justify-center">
          <div className="flex items-center justify-center h-8 w-8 border rounded-2xl hover:border-blue-500 hover:cursor-pointer">
            <CiEdit size={20} className="hover:scale-125"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemExpiry;
