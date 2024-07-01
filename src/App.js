import { useState } from 'react';

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-teal-100">
      <ShoppingList />
    </div>
  );
}

function ShoppingList() {
  const [inputValue, setinputValue] = useState('');
  const [items, setItems] = useState([]);

  function handleAddShoppingList() {
    if (inputValue) setItems([...items, inputValue]);
    setinputValue('');
  }

  return (
    <div className="h-auto w-1/2 rounded-md bg-slate-100">
      <h1 className="mt-4 text-center font-sans text-2xl font-bold italic">
        Shopping List 🛍️
      </h1>
      <div className="my-10 flex items-center justify-center space-x-4">
        <input
          className="ml-9 mt-5 w-1/2 border-b-2 border-slate-950 bg-gray-100 font-sans text-xl leading-none outline-none"
          type="text"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <button
          className="mt-5 h-10 w-10 rounded-full border-2 border-slate-950 bg-slate-50 font-bold text-black shadow-md focus:ring focus:ring-teal-200"
          onClick={handleAddShoppingList}
        >
          +
        </button>
      </div>

      <div className="m-auto w-3/4 bg-zinc-50">
        <ul className="mx-6 my-6 list-disc pl-3 text-lg">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
