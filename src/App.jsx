import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("skyblue")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "skyblue" }}
          >
            SkyBlue
          </button>

          <button
            onClick={() => setColor("seagreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "seagreen" }}
          >
            Seagreen
          </button>

          <button
            onClick={() => setColor("maroon")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "maroon" }}
          >
            Maroon
          </button>

          <button
            onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>

          <button
            onClick={() => setColor("lightgreen")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lightgreen" }}
          >
            Lightgreen
          </button>

          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("aqua")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "aqua" }}
          >
            Aqua
          </button>

          <button
            onClick={() => setColor("magenta")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>

          <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("lightgrey")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lightgrey" }}
          >
            Lightgrey
          </button>

          <button
            onClick={() => setColor("rebeccapurple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "rebeccapurple" }}
          >
            Rebeccapurple
          </button>

          <button
            onClick={() => setColor("navy")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "navy" }}
          >
            Navy
          </button>

          <button
            onClick={() => setColor("teal")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "teal"}}>
            Teal
          </button>

          <button
            onClick={() => setColor("aquamarine")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "aquamarine" }}
          >
            Aquamarine
          </button>

          <button
            onClick={() => setColor("chocolate")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "chocolate" }}
          >
            Chocolate
          </button>

          <button
            onClick={() => setColor("darkblue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "darkblue" }}
          >
            Darkblue
          </button>

          <button
            onClick={() => setColor("darkkhaki")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "darkkhaki" }}
          >
            Darkkhaki
          </button>

          <button
            onClick={() => setColor("turquoise")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "turquoise" }}
          >
            Turquoise
          </button>

          <button
            onClick={() => setColor("deeppink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "deeppink" }}
          >
            DeepPink
          </button>

          <button
            onClick={() => setColor("gold")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "gold" }}
          >
            Gold
          </button>

          <button
            onClick={() => setColor("indigo")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>

          <button
            onClick={() => setColor("lawngreen")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lawngreen" }}
          >
            Lawngreen
          </button>

          <button
            onClick={() => setColor("lightcoral")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lightcoral" }}
          >
            Lightcoral
          </button>

          <button
            onClick={() => setColor("lightpink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lightpink" }}
          >
            Lightpink
          </button>

          <button
            onClick={() => setColor("lime")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lime" }}
          >
            Lime
          </button>

          <button
            onClick={() => setColor("midnightblue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "midnightblue" }}
          >
            Nightblue
          </button>

          <button
            onClick={() => setColor("silver")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "silver" }}
          >
            Silver
          </button>

          <button
            onClick={() => setColor("steelblue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "steelblue" }}
          >
            Steelblue
          </button>

          <button
            onClick={() => setColor("yellowgreen")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellowgreen" }}
          >
            Yellowgreen
          </button>

          <button
            onClick={() => setColor("thistle")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "thistle" }}
          >
            Thistle
          </button>

          <button
            onClick={() => setColor("sienna")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "sienna" }}
          >
            Lightbrown
          </button>

          <button
            onClick={() => setColor("palevioletred")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "palevioletred" }}
          >
            Violetred
          </button>

          <button
            onClick={() => setColor("darksalmon")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "darksalmon" }}
          >
            Darksalmon
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;