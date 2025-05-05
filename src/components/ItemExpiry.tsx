import clsx from "clsx";
import { CiEdit } from "react-icons/ci";

function ItemExpiry({
  title,
  activationDate,
  durationInDays,
  active,
}: {
  title: string;
  activationDate: string;
  durationInDays: string;
  active?: boolean | false;
}) {
  return (
    <>
      <div className="h-24 w-96 bg-white border rounded-2xl relative">
        <div className="absolute h-10 w-10 bg-white rounded-3xl -top-4 -right-4 flex items-center justify-center">
          <div className="flex items-center justify-center h-8 w-8 border rounded-2xl hover:border-blue-500 hover:cursor-pointer">
            <CiEdit size={20} className="hover:scale-125" />
          </div>
        </div>
        <div className="h-full w-full rounded-2xl">
          <div className="w-full h-14 rounded-tl-2xl flex items-center">
            <div className="w-3/4 pt-2 pl-4">
              <p className="text-xl">{title}</p>
              <span>Create at: {activationDate}</span>
            </div>
            <div className="h-full w-2/4 flex items-center justify-center">
              <div
                className={clsx(
                  `border border-amber-50 rounded-[8px]`,
                  active == true
                    ? "bg-green-300 text-green-600"
                    : "bg-red-300 text-red-600"
                )}
              >
                <span className="px-2 py-6 select-none">
                  Còn {durationInDays} ngày
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex justify-end">
            <div className="h-8 w-16 border rounded-[8px] mr-6 flex items-center justify-center hover:cursor-pointer select-none">
              <p>Xóa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemExpiry;
