import ItemExpiry from "@/components/ItemExpiry";

export default function Home() {
  return (
    <div className="h-screen w-full relative">
      <div className="h-60 w-full bg-gray-800 flex justify-center items-center">
        <h1 className="text-white text-4xl">Danh sách sự kiện</h1>
      </div>
      <div className="w-full h-auto flex justify-center -translate-y-10">
        <div className="flex flex-col gap-6">
          <ItemExpiry
            title="Đăng ký sim"
            activationDate="11/2/2025"
            durationInDays="12"
            active={true}
          />
        </div>
      </div>
      <button className="fixed bottom-6 right-6 h-14 w-14 bg-amber-500 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 transition-colors hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
