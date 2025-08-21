import { useState } from "react";

function Total() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const menus = [
    "Dashboard",
    "자재관리",
    "재고조회",
    "주문관리",
    "생산계획",
    "회계",
    "인사관리",
  ];

  return (
    <div className="flex h-screen font-sans">
      {/* 사이드 메뉴 */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <h1 className="text-2xl font-bold p-4 border-b border-gray-700">ERP</h1>
        <ul className="flex-1">
          {menus.map((menu) => (
            <li
              key={menu}
              className={`p-4 cursor-pointer hover:bg-gray-700 ${
                selectedMenu === menu ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedMenu(menu)}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 bg-gray-100 p-6">
        <h2 className="text-3xl font-bold mb-4">{selectedMenu}</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* ERP 내용 예시 카드 */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
            >
              {selectedMenu} 항목 {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Total;
