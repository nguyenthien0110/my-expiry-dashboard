"use client";

import ItemExpiry from "@/components/ItemExpiry";
import { useEffect, useState } from "react";

export interface Event {
  name: string;
  activationDate: string;
  durationInDays: number;
  active: string;
}

export default function Home() {
  const [events, setEvents] = useState<Event[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/get-sheet");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEvents(data.rows);
      } catch (err) {
        let errorMessage = "Failed to load data";
        if (err instanceof Error) {
          errorMessage = err.message;
        } else if (typeof err === "string") {
          errorMessage = err;
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full relative">
      <div className="h-60 w-full bg-gray-800 flex justify-center items-center">
        <h1 className="text-white text-4xl">Danh sách sự kiện</h1>
      </div>
      <div className="w-full h-auto flex justify-center -translate-y-10">
        <div className="flex flex-col gap-6">
          {loading ? (
            <div className="text-gray-600 text-lg">Đang tải dữ liệu...</div>
          ) : error ? (
            <div className="text-red-500 text-lg">{error}</div>
          ) : events.length > 0 ? (
            events.map((item, index) => <ItemExpiry key={index} prop={item} />)
          ) : (
            <div className="text-gray-500 text-lg">Không có sự kiện nào.</div>
          )}
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
