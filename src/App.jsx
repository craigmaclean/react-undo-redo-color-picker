import './App.css'
import Button from './components/Button';

export default function App() {
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-gray-700 bg-slate-200">
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
            value="#e2e8f0"
            className="w-full h-24 rounded-lg border-2 border-border p-0 cursor-pointer"
          />
        </div>

        {/* Color Preview Section */}
        <div className="py-8">
          <p className="text-center text-3xl font-semibold">
            #e2e8f0
          </p>
        </div>

        {/* Undo/Redo Buttons */}
        <div className="flex gap-6">
          <Button type="Undo" />
          
          <Button type="Redo" />
        </div>

        {/* Debug Info */}
        <div className="pt-2">
          <p className="text-sm text-center">
            History length: 3 • Position: 2 / 3
          </p>
        </div>
      </div>
    </div>
  );
}