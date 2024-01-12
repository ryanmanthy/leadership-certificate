import './App.css';

function App() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:h-screen mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 bg-red-500" style={{ zIndex: -1 }}></div>      
        <div className="md:w-1/2 w-full h-full p-4"> {/* Left container */}

            <div className="hero bg-white" style={{ height: "50vh" }}>
            <div class="hero-content flex-col lg:flex-row-reverse py-8">
              <div>
                <p class="bold-line text-black">Leadership Certificate Program</p>
                <h1 class="text-5xl font-bold text-red-500">40 hours building leadership skills to last a lifetime.</h1>
              </div>
            </div>
          </div>

        <div class="flex flex-col lg:flex-row justify-between items-stretch gap-4 px-4">
          {/* Each box takes up full width on mobile, 1/3 on desktop, and their height is adjusted */}
          <div class="rounded-md lg:w-1/3 bg-red-500 text-white p-4 flex flex-col h-auto lg:max-h-[40vh]">
            <h2 class="text-lg font-semibold mb-2">Box Title 1</h2>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div class="rounded-md lg:w-1/3 bg-red-500 text-white p-4 flex flex-col h-auto lg:max-h-[40vh]">
            <h2 class="text-lg font-semibold mb-2">Box Title 2</h2>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div class="rounded-md lg:w-1/3 bg-red-500 text-white p-4 flex flex-col h-auto lg:max-h-[40vh]">
            <h2 class="text-lg font-semibold mb-2">Box Title 3</h2>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
            
        </div>
        <div className="md:w-1/2 w-full h-full bg-red-500"> {/* Right container */}

          <div class="flex flex-col items-center justify-center h-screen bg-red-500 p-4">
            <div class="space-y-4 w-full max-w-md">
              {/* First Button */}
              <div class="bg-white text-center p-4 rounded-lg shadow-lg transition duration-300 hover:bg-gray-100 border border-transparent hover:border-red-600">
                <h2 class="text-lg font-semibold text-red-500">📝 View or Update My Progress</h2>
                <p>Log in to track previous seminars and track your progress to achieving a certificate.</p>
              </div>
              {/* Second Button */}
              <div class="bg-white text-center p-4 rounded-lg shadow-lg transition duration-300 hover:bg-gray-100 border border-transparent hover:border-red-600">
                <h2 class="text-lg font-semibold text-red-500">🏅 Join the Certificate Program</h2>
                <p>Take the first step towards your leadership certificate and sign up today.</p>
              </div>
              {/* Third Button */}
              <div class="bg-white text-center p-4 rounded-lg shadow-lg transition duration-300 hover:bg-gray-100 border border-transparent hover:border-red-600">
                <h2 class="text-lg font-semibold text-red-600">🎓 Sign Up for the Next Seminar</h2>
                <p>Earn hours towards your certificate by attending our monthly seminars.</p>
              </div>
            </div>
          </div>

        </div>

        

    </div>
  );
}

export default App;
