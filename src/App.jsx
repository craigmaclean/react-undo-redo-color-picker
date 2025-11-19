import { useState } from 'react';
import './App.css'
import Button from './components/Button';

export default function App() {
  const MAX_HISTORY = 5;

  const [colorHistory, setColorHistory] = useState(['#f1f5f9']);
  const [index, setIndex] = useState(0);
  const currentColor = colorHistory[index];
  
  // Handle the UI event & extract the value
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    addColorToHistory(newColor);
  }

  // Handle history management logic
  const addColorToHistory = (newColor) => {
    // Step 1: Check if new color is different from current
    if(newColor === currentColor) return;

    // Step 2: Remove any "future" history after current index
    const newHistory = colorHistory.slice(0, index + 1);

     // Step 3: Add the new color to the history
    const updatedHistory = [...newHistory, newColor];

    // Step 4: Limit array to MAX_HISTORY
    if(updatedHistory.length > MAX_HISTORY) {
      updatedHistory.shift();
    }

    // Step 5: Update both states
    setColorHistory(updatedHistory);
    setIndex(updatedHistory.length - 1);
  }

  const undo = () => {
    if (index > 0) {
      setIndex(index - 1); // move pointer back 1
    }
  }

  const redo = () => {
    if (index < colorHistory.length - 1) {
      setIndex(index + 1); // move pointer forward 1
    }
  }

  const canUndo = index > 0;
  const canRedo = index < colorHistory.length - 1;

  console.log('Current color:', currentColor);
  console.log('Color history: ', colorHistory);
  console.log('Array Length: ', colorHistory.length);
  console.log('Index: ', index);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-gray-700" style={{ backgroundColor: currentColor }}>
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-10 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">
            React Color Picker with Undo / Redo
          </h1>
          <p className="text-sm">
            A simple color picker with history management. Pick a color and use undo/redo to navigate through your color choices.
          </p>
        </div>

        {/* Color Input Section */}
        <div className="space-y-2">
          <label htmlFor="color-input" className="block text-sm font-medium">
            Choose a color:
          </label>
          <input
            id="color-input"
            type="color"
            value={currentColor}
            onChange={handleColorChange}
            className="w-full h-24 rounded-lg border-2 border-border p-0 cursor-pointer"
          />
        </div>

        {/* Color Preview Section */}
        <div className="py-8">
          <p className="text-center text-3xl font-semibold">
            {currentColor}
          </p>
        </div>

        {/* Undo/Redo Buttons */}
        <div className="flex gap-6">
          <Button type="Undo" action={undo} disabled={!canUndo} />
          
          <Button type="Redo" action={redo} disabled={!canRedo} />
        </div>

        {/* Debug Info */}
        <div className="pt-2">
          <p className="text-sm text-center">
            History length: {colorHistory.length} • Position: {index + 1} / {colorHistory.length}
          </p>
        </div>
      </div>
    </div>
  );
}